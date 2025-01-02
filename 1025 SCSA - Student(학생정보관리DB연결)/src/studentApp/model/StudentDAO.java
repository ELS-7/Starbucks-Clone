package studentApp.model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class StudentDAO {

	Connection conn = null;
	PreparedStatement psmt = null;
	ResultSet rs = null;
	int cnt = 0;
	
	public void conn() {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			String dbUrl = "jdbc:oracle:thin:@localhost:1521:xe";
			String dbId = "SCOTT";
			String dbPw = "TIGER";
			conn = DriverManager.getConnection(dbUrl, dbId, dbPw);
			System.out.println();
//			System.out.println("DB 연결 완료");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("Class Not Found 에러");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("SQL 에러");
		}
		
	}
	
	public void close() {
		try {
			if(rs != null)
				rs.close();
			if(psmt != null)
				psmt.close();
			if(conn != null)
				conn.close();
			System.out.println();
//			System.out.println("DB 연결 해제");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	//과목 개수 가져오기
	// score 테이블의 열 개수를 가져오는 메서드
    public int getScoreColumnCount() {
        String sql = "SELECT COUNT(*) FROM USER_TAB_COLUMNS WHERE table_name = 'SCORE'";
        int columnCount = 0;
        
        try {
            conn(); // DB 연결
            psmt = conn.prepareStatement(sql);
            rs = psmt.executeQuery();
            
            if (rs.next()) {
                columnCount = rs.getInt(1) - 1; // 첫 번째 열인 student_num 제외
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            close();
        }
        
        return columnCount;
    }
	
  // 과목명들(열) 가져오는 메서드
    public List<String> getScoreColumnNames() {
        String sql = "SELECT column_name FROM USER_TAB_COLUMNS WHERE table_name = 'SCORE' AND column_name != 'STUDENT_NUM'";
        List<String> columnNames = new ArrayList<>();
        
        try {
            conn(); // DB 연결
            psmt = conn.prepareStatement(sql);
            rs = psmt.executeQuery();
            
            while (rs.next()) {
                columnNames.add(rs.getString("column_name")); // 과목 이름 추가
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            close();
        }
        
        return columnNames;
    }
  
    
    
 // 학생 데이터를 DB에 삽입하는 메서드
    public void insertStudent(String name, String[] grades) {
        conn();

        // student 테이블에 num과 name을 삽입하는 쿼리
        String studentSql = "INSERT INTO student (num, name) VALUES (student_seq.NEXTVAL, ?)";
        
        try {
            // 1. student 테이블에 데이터 삽입
            psmt = conn.prepareStatement(studentSql, new String[]{"num"});
            psmt.setString(1, name);
            int cnt = psmt.executeUpdate();
            System.out.println(cnt + "행 입력 완료 (student 테이블)");

            // 2. 자동으로 생성된 student_num 값을 가져오기
            rs = psmt.getGeneratedKeys();
            if (rs.next()) {
                int studentNum = rs.getInt(1); // 자동 생성된 번호
                
                // 3. score 테이블에서 실제 존재하는 과목 컬럼들을 가져옴
                String getColumnSql = "SELECT column_name FROM USER_TAB_COLUMNS WHERE table_name = 'SCORE' AND column_name NOT IN ('STUDENT_NUM') ORDER BY column_id";
                psmt = conn.prepareStatement(getColumnSql);
                rs = psmt.executeQuery();
                
                List<String> columnNames = new ArrayList<>();
                while (rs.next()) {
                    columnNames.add(rs.getString("column_name"));
                }

                // 성적 수와 컬럼 수 일치 확인
                if (grades.length != columnNames.size()) {
                    System.out.println("입력된 성적 수와 SCORE 테이블의 컬럼 수가 일치하지 않습니다.");
                    return;
                }
                
                // 4. 동적 SQL 생성 및 점수 삽입
                String scoreSql = "INSERT INTO score (student_num";
                for (String columnName : columnNames) {
                    scoreSql += ", " + columnName;
                }
                scoreSql += ") VALUES (?";
                for (int i = 0; i < grades.length; i++) {
                    scoreSql += ", ?";
                }
                scoreSql += ")";

                psmt = conn.prepareStatement(scoreSql);
                psmt.setInt(1, studentNum); // 첫 번째는 student_num
                
                for (int i = 0; i < grades.length; i++) {
                    psmt.setString(i + 2, grades[i]); // 나머지 과목 성적 설정
                }
                
                cnt = psmt.executeUpdate();
                System.out.println(studentNum + "번 학생의 성적 " + cnt + "행 입력 완료 (score 테이블)");
            }

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            close();
        }
    }

	
	public void updateGrade(int num, int type, String grade) {
	    String columnName = null;
	    String getColumnSql = "SELECT column_name FROM USER_TAB_COLUMNS WHERE table_name = 'SCORE' AND column_name LIKE '%GRADE' ORDER BY column_id";

	    try {
	        conn(); // DB 연결
	        psmt = conn.prepareStatement(getColumnSql);
	        
	        rs = psmt.executeQuery();
	        int currentType = 1;

	        // rs에서 type번째 과목 열을 찾기
	        while (rs.next()) {
	            if (currentType == type) {
	                columnName = rs.getString("column_name");
	                break;
	            }
	            currentType++;
	        }

	        if (columnName == null) {
	            System.out.println("잘못된 과목 번호입니다.");
	            return;
	        }

	        // 동적으로 업데이트 SQL 생성
	        String updateScoreSql = "UPDATE SCORE SET " + columnName + " = ? WHERE student_num = ?";
	        psmt = conn.prepareStatement(updateScoreSql);

	        // 새로운 점수와 학생 번호 세팅
	        psmt.setString(1, grade); // 과목 성적
	        psmt.setInt(2, num); // 학생 번호

	        int cnt = psmt.executeUpdate();
	        System.out.println(cnt + "행 업데이트됨");

	    } catch (SQLException e) {
	        e.printStackTrace();
	    } finally {
	        close();
	    }
	}


	
	
	public boolean checkExistNum(int num) {
        String checkNumSql = "SELECT COUNT(*) FROM student WHERE num = ?";
        
        try {
            conn(); // DB 연결
            psmt = conn.prepareStatement(checkNumSql);
            psmt.setInt(1, num); // 학생 번호를 세팅

            rs = psmt.executeQuery();
            if (rs.next()) {
                int count = rs.getInt(1);
                return count > 0; // 학생 번호가 존재하면 true 반환
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            close();
        }

        return false; // 학생 번호가 존재하지 않거나 오류 발생 시 false 반환
    }
	
	//열수보다 작은지 체크 : 과목 번호 내에 포함되는지
	public boolean checkColumnCount(int num) {
	    String checkColumnCountSql = "SELECT COUNT(*) FROM USER_TAB_COLUMNS WHERE table_name = 'SCORE'";

	    try {
	        conn(); // DB 연결
	        psmt = conn.prepareStatement(checkColumnCountSql);
	        
	        rs = psmt.executeQuery();
	        if (rs.next()) {
	            int columnCount = rs.getInt(1); // score 테이블의 열 개수

	            // num이 열 개수보다 크면 false, 작거나 같으면 true 반환
	            return num <= columnCount;
	        }
	    } catch (SQLException e) {
	        e.printStackTrace();
	    } finally {
	        close();
	    }

	    return false; // 오류 발생 시 false 반환
	}

	
	public List<Integer> checkExistName(String name) {
	    List<Integer> studentNums = new ArrayList<>();
	    String checkNumSql = "SELECT num FROM student WHERE name = ?";
	    
	    try {
	        conn(); // DB 연결
	        psmt = conn.prepareStatement(checkNumSql);
	        psmt.setString(1, name); // 학생 이름을 세팅

	        rs = psmt.executeQuery();
	        while (rs.next()) {
	            studentNums.add(rs.getInt("num")); // 모든 학생의 num을 리스트에 추가
	        }
	    } catch (SQLException e) {
	        e.printStackTrace();
	    } finally {
	        close();
	    }

	    return studentNums; // 이름이 존재하는 학생의 num 리스트 반환
	}


	
	//2 학생목록 조회
	public ArrayList<StudentVO> getStudentList() {
        ArrayList<StudentVO> studentList = new ArrayList<>();
        conn();

        try {
            List<String> gradeColumns = new ArrayList<>();
            String getGradeColumnsSql = "SELECT column_name FROM USER_TAB_COLUMNS WHERE table_name = 'SCORE' AND column_name LIKE '%GRADE' ORDER BY column_id";
            psmt = conn.prepareStatement(getGradeColumnsSql);
            rs = psmt.executeQuery();
            while (rs.next()) {
                gradeColumns.add(rs.getString("column_name"));
            }
            rs.close();
            psmt.close();

            StringBuilder selectSql = new StringBuilder();
            selectSql.append("SELECT s.num, s.name");
            for (String column : gradeColumns) {
                selectSql.append(", sc.").append(column);
            }
            selectSql.append(" FROM student s JOIN score sc ON s.num = sc.student_num");

            psmt = conn.prepareStatement(selectSql.toString());
            rs = psmt.executeQuery();

            while (rs.next()) {
                int num = rs.getInt("num");
                String name = rs.getString("name");

                Map<String, String> grades = new LinkedHashMap<>();
                for (String column : gradeColumns) {
                    String grade = rs.getString(column);
                    grades.put(column, grade);
                }

                StudentVO student = new StudentVO(num, name, grades);
                studentList.add(student);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            close();
        }
        return studentList;
    }

public void delete(int num) {
        conn();
        try {
            conn.setAutoCommit(false);

            String sqlScore = "DELETE FROM score WHERE student_num = ?";
            psmt = conn.prepareStatement(sqlScore);
            psmt.setInt(1, num);
            int scoreDeleteCount = psmt.executeUpdate();
            psmt.close();

            String sqlStudent = "DELETE FROM student WHERE num = ?";
            psmt = conn.prepareStatement(sqlStudent);
            psmt.setInt(1, num);
            int studentDeleteCount = psmt.executeUpdate();

            conn.commit();
            if (studentDeleteCount ==0) {
            	System.out.println("해당 번호의 학생이 없습니다.");
            } else {
            	System.out.println("학생 삭제 완료: " + studentDeleteCount + "행 삭제");
                System.out.println("점수 삭제 완료: " + scoreDeleteCount + "행 삭제");
            }
            

        } catch (SQLException e) {
            e.printStackTrace();
            try {
                conn.rollback();
            } catch (SQLException rollbackEx) {
                rollbackEx.printStackTrace();
            }
        } finally {
            close(); 
        }
    }

// 5. 학생검색
public ArrayList<StudentVO> search(String keyword) {
    ArrayList<StudentVO> studentList = new ArrayList<>();
    conn();
    try {
        List<String> gradeColumns = new ArrayList<>();
        String getGradeColumnsSql = "SELECT column_name FROM USER_TAB_COLUMNS WHERE table_name = 'SCORE' AND column_name LIKE '%GRADE' ORDER BY column_id";
        psmt = conn.prepareStatement(getGradeColumnsSql);
        rs = psmt.executeQuery();
        while (rs.next()) {
            gradeColumns.add(rs.getString("column_name"));
        }
        rs.close();
        psmt.close();

        StringBuilder selectSql = new StringBuilder();
        selectSql.append("SELECT s.num, s.name");
        for (String column : gradeColumns) {
            selectSql.append(", sc.").append(column);
        }
        selectSql.append(" FROM student s JOIN score sc ON s.num = sc.student_num WHERE s.name LIKE ?");

        psmt = conn.prepareStatement(selectSql.toString());
        psmt.setString(1, "%" + keyword + "%");

        rs = psmt.executeQuery();

        while (rs.next()) {
            int num = rs.getInt("num");
            String name = rs.getString("name");

            Map<String, String> grades = new LinkedHashMap<>();
            for (String column : gradeColumns) {
                String grade = rs.getString(column);
                grades.put(column, grade);
            }

            StudentVO student = new StudentVO(num, name, grades);
            studentList.add(student);
        }
    } catch (SQLException e) {
        e.printStackTrace();
    } finally {
        close();
    }
    return studentList;
}
		
	//과목 추가
	public void addNewSubjectColumn(String subjectName) {
	 String columnName = (subjectName + "GRADE").toUpperCase(); // 컬럼 이름을 대문자로 변환
	 String checkColumnSql = "SELECT COUNT(*) FROM USER_TAB_COLUMNS WHERE table_name = 'SCORE' AND column_name = ?";
	
	 String addColumnSql = "ALTER TABLE SCORE ADD " + columnName + " VARCHAR(10)"; // 적절한 데이터 타입으로 변경 가능
	 try {
	     conn(); // DB 연결
	     
	     // 1. 새로운 컬럼이 존재하는지 확인
	     psmt = conn.prepareStatement(checkColumnSql);
	     psmt.setString(1, columnName); // 컬럼 이름 세팅
	     
	     rs = psmt.executeQuery();
	     if (rs.next()) {
	         int count = rs.getInt(1);
	         if (count > 0) {
	             System.out.println("이미 있는 과목입니다."); // 컬럼이 존재하는 경우
	             return;
	         }
	     }
	
	     // 2. 컬럼이 존재하지 않으면 새로 추가
	     psmt = conn.prepareStatement(addColumnSql);
	     psmt.executeUpdate();
	     System.out.println("새로운 과목 " + columnName + "이(가) 추가되었습니다."); // 성공적으로 추가된 경우
	
	 } catch (SQLException e) {
	     e.printStackTrace();
	 } finally {
	     close();
	 }
	}

	
	

}
