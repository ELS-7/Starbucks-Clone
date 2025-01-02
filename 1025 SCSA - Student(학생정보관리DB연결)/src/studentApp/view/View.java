package studentApp.view;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

import studentApp.controller.Controller;
import studentApp.model.StudentVO;

public class View {
	private Controller controller = new Controller();
	private Scanner sc = new Scanner(System.in);

	public void menu() {
		int action = 0;
		boolean isExit = false;
		
		while(true) {
			if(isExit) {
				break;
			}
			// 메뉴
			System.out.println("=======================");
			System.out.println("===== 학생부 프로그램 =====");
			System.out.println("=======================");
			System.out.println("1. 학생추가");
			// 동명이인 입력되지 않게 한다.
			System.out.println("2. 학생목록"); 
			// 이름, 과목, 성적으로 보여져야한다.
			// join
			System.out.println("3. 성적변경");
			// 이름을 입력해서 학생을 찾고 성적을 찾아서 수정한다.(동명이인은 고려하지 않는다.)
			System.out.println("4. 학생삭제");
			// 이름으로 삭제한다.(단, 성적도 같이 삭제한다.)
			System.out.println("5. 학생검색");
			System.out.println("6. 과목 추가");
			// 이름으로 한다. (이름, 과목, 성적으로 보여져야한다.)
			System.out.println("7. 종료");
			
			try {
				action = sc.nextInt();
				if(1 <= action && 6 >= action) {
					
					switch(action) {
					
						case 1 : // 학생추가
							this.menu1();
							break;
						case 2 : // 학생목록
							this.menu2();
							break;
						case 3 : // 성적변경
							this.menu3();
							break;
						case 4 : // 학생삭제
							this.menu4();
							break;
						case 5 : // 학생검색
							this.menu5();
							break;
						case 6 : // 과목 추가
							this.menu6();
							break;
						case 7 : // 프로그램 종료
							isExit = true;
							break;
					}
				}
				else {
					System.out.println("1~6만 입력 가능합니다.");
				}
	
			}
			catch (InputMismatchException e) {
				System.out.println("정수만 입력 가능합니다.");
				sc.nextLine();
			}
			catch (Exception e) {
				System.out.println(e.getMessage());
			}
		}
	}
	
	/**
	 * 학생 추가
	 * @throws Exception 
	 *
	 */
	// View.java
	public void menu1() throws Exception {
	    List<String> columnNames = this.controller.getScoreColumnNames();
	    int columnCount = columnNames.size();
	    
	 // 과목 이름 처리
	    List<String> formattedColumnNames = new ArrayList<>();
	    for (String columnName : columnNames) {
	        String formattedName = columnName.replace("GRADE", ""); // 'GRADE' 제거
	        formattedName = formattedName.substring(0, 1).toUpperCase() + formattedName.substring(1).toLowerCase(); // 첫 문자를 대문자로
	        formattedColumnNames.add(formattedName);
	    }
	    
	    System.out.println("학생 이름과 성적을 입력해주세요. 예 : 김xx A B C 100. 숫자와 문자 혼용이 가능합니다.");
	    System.out.println("지금 입력해야 하는 과목은 " + columnCount + "개 입니다: " + String.join(", ", formattedColumnNames));
	    
	    String input1 = sc.nextLine(); // 엔터 넘기기
	    String input = sc.nextLine(); // 한 줄 입력 받기

	    // 입력받은 문자열을 공백으로 분리
	    String[] data = input.split(" "); 
	    
	    if (data.length != columnCount + 1) { // 입력한 성적 수가 컬럼 개수와 맞는지 확인
	        System.out.println("잘못된 입력입니다. 이름과 " + columnCount + "개의 성적을 입력하세요.");
	        return; // 입력이 잘못된 경우 종료
	    }

	    String name = data[0]; // 첫 번째 요소: 이름
	    String[] grades = new String[columnCount];
	    System.arraycopy(data, 1, grades, 0, columnCount); // 성적만 배열로 복사
	    this.controller.studentInsert(name, grades); // 수정된 매개변수에 따라 호출
	    
	    System.out.println("학생 추가 완료");
	}


	
	/**
	 * 학생 목록
	 * @throws Exception 
	 *
	 */
	public void menu2() throws Exception {
        System.out.println("===== 학생 목록 =====");

        ArrayList<StudentVO> studentList = this.controller.studentList();

        if (studentList.size() == 0) {
            System.out.println("학생 목록이 없습니다.");
        } else {
            
            List<String> subjectList = new ArrayList<>();
            if (!studentList.isEmpty()) {
                subjectList.addAll(studentList.get(0).getGrades().keySet());
            }

            
            System.out.printf("%-4s | %-10s", "번호", "이름");
            for (String subject : subjectList) {
                // 컬럼명 포맷팅 (예: MATHGRADE -> Math)
                String subjectName = subject.replace("GRADE", "");
                System.out.printf(" | %-10s", subjectName);
            }
            System.out.println();
            System.out.println("--------------------------------------------------------");

            
            for (StudentVO student : studentList) {
                System.out.printf("%-4d | %-10s", student.getNum(), student.getName());
                Map<String, String> grades = student.getGrades();
                for (String subject : subjectList) {
                    String grade = grades.getOrDefault(subject, "-");
                    System.out.printf(" | %-10s", grade);
                }
                System.out.println();
            }
        }
    }
	
	/**
	 * 성적 변경
	 * @throws Exception 
	 *
	 */
	public void menu3() throws Exception {
		System.out.println("===== 성적 변경 =====");
		System.out.println("학생 번호를 입력해주세요.");
		int num = sc.nextInt();
		
		if (this.controller.checkNumExist(num) == false) {
			return;
		}
		
		List<String> columnNames = this.controller.getScoreColumnNames();
	    int columnCount = columnNames.size();
	    
	 // 과목 이름 처리
	    List<String> formattedColumnNames = new ArrayList<>();
	    for (String columnName : columnNames) {
	        String formattedName = columnName.replace("GRADE", ""); // 'GRADE' 제거
	        formattedName = formattedName.substring(0, 1).toUpperCase() + formattedName.substring(1).toLowerCase(); // 첫 문자를 대문자로
	        formattedColumnNames.add(formattedName);
	    }
		
	    System.out.println("수정할 과목 번호를 입력해주세요.");
	    for (int i = 0; i < columnCount; i++) {
	        System.out.println((i + 1) + ": " + formattedColumnNames.get(i)); // 번호: 과목명 형식으로 출력
	    }
		int type = sc.nextInt();
        if (!this.controller.checkColumnCount(type)) {
        	System.out.println("없는 과목 번호입니다.");
        	return;
        }
		System.out.println("새 성적을 입력해주세요.");
		String grade = sc.next();
		this.controller.studentScoreUpdate(num,type, grade);
		System.out.println("성적 변경 완료");
	}
	
	/**
	 * 학생 삭제
	 * @throws Exception 
	 *
	 */
	public void menu4() throws Exception {
        System.out.println("===== 학생 삭제 =====");
        System.out.println("학생 번호를 입력해주세요.(고윳값)");
        int num = sc.nextInt();

        this.controller.studentDelete(num);
        System.out.println("학생 삭제 완료");
    }
	
	/**
	 * 학생 검색
	 *
	 */
	public void menu5() {
        System.out.println("===== 학생 검색 =====");
        System.out.println("검색할 학생 이름을 입력해주세요.");
        String keyword = sc.next();

        ArrayList<StudentVO> studentList = this.controller.studentSearch(keyword);

        if (studentList.size() == 0) {
            System.out.println("학생 목록이 없습니다.");
        } else {
            List<String> subjectList = new ArrayList<>();
            if (!studentList.isEmpty()) {
                subjectList.addAll(studentList.get(0).getGrades().keySet());
            }

            
            System.out.printf("%-4s | %-10s", "번호", "이름");
            for (String subject : subjectList) {
                // 컬럼명 포맷팅 (예: MATHGRADE -> Math)
                String subjectName = subject.replace("GRADE", "");
                System.out.printf(" | %-10s", subjectName);
            }
            System.out.println();
            System.out.println("--------------------------------------------------------");

            
            for (StudentVO student : studentList) {
                System.out.printf("%-4d | %-10s", student.getNum(), student.getName());
                Map<String, String> grades = student.getGrades();
                for (String subject : subjectList) {
                    String grade = grades.getOrDefault(subject, "-");
                    if (grade.equals(null)) { // null 체크
                        grade = "-"; // null이면 "-"로 설정
                    }
                    System.out.printf(" | %-10s", grade);
                }
                System.out.println();
            }
        }
    }
	
	public void menu6() throws Exception {
        System.out.println("===== 과목 추가 =====");
        System.out.println("추가할 과목명을 입력해주세요.");
	    String input1 = sc.nextLine(); // 엔터 넘기기
        String subject = sc.nextLine();
        this.controller.subjectUpdate(subject);
        
    }
	
}
