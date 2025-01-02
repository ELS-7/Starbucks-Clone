package studentApp.controller;

import java.util.ArrayList;
import java.util.List;

import studentApp.model.StudentDAO;
import studentApp.model.StudentVO;

public class Controller {

	private ArrayList<StudentVO> studentList = new ArrayList<StudentVO>();
	
	/**
	 * 학생 목록에서 번호가 중복되는지를 체크
	 * 
	 * @param int num
	 */
	// 목록조회
	public ArrayList<StudentVO> studentList() throws Exception {
        StudentDAO dao = new StudentDAO();
        ArrayList<StudentVO> studentList = dao.getStudentList();
        return studentList;
    }

	//열(과목) 개수 받아오기
	public int getScoreColumn() {
		StudentDAO dao = new StudentDAO(); 
	    int columnCount = dao.getScoreColumnCount(); // score 테이블의 열 개수 가져오기
	    return columnCount;
	}
	
	//열(과목) 전체 받아오기
	public List<String> getScoreColumnNames() {
		StudentDAO dao = new StudentDAO(); 
		return dao.getScoreColumnNames();
	}
	
	
	public boolean checkNum(int num) {
        // DAO로 DB에서 num번의 학생이 존재하는지 체크
		StudentDAO dao = new StudentDAO();
        return dao.checkExistNum(num);
    }
	
	// 있는 이름인지 체크
	public void checkName(String name) {
		StudentDAO dao = new StudentDAO();
		List<Integer> studentNums = dao.checkExistName(name);
		if (!studentNums.isEmpty()) {
			System.out.println("이미 존재하는 이름입니다. 동명이인에 주의해주세요.");
		    System.out.println("해당 이름의 학생 번호들: " + studentNums);
		}
    }
	//과목수정 : 있는 과목type인지 체크
	public boolean checkColumnCount(int num) {
        // DAO로 DB에서 num번째 과목이 존재하는지 확인
		StudentDAO dao = new StudentDAO();
        return dao.checkColumnCount(num);
    }
	
	
	
	/**
	 * 학생 데이터 추가
	 * 
	 * @param num
	 * @param name
	 * @param score
	 * @throws Exception 
	 */
	public void studentInsert(String name, String[] grades) throws Exception {
		checkName(name);
		StudentDAO dao = new StudentDAO();
		dao.insertStudent(name, grades); // DB에 학생 데이터 삽입
	}
	
	/**
	 * 학생의 성적 데이터 수정
	 * 
	 * @param num
	 * @param name
	 * @param score
	 * @throws Exception 
	 */
	
	public boolean checkNumExist(int num) throws Exception {
		if (!checkNum(num)) {
	        System.out.println("존재하지 않는 학생 번호입니다.");
	        return false;
		}
		return true;
	}
	
	public void studentScoreUpdate(int num,int type, String grade) throws Exception {
	    
	        // 과목번호 체크는 controller.checkColumnCount(type)로 처리
//	    } else if (type >3 || type<1) {
//	    	throw new Exception("잘못된 과목 번호입니다. (1: 수학, 2: 과학, 3: 영어)");
	    
	    StudentDAO dao = new StudentDAO();
		dao.updateGrade(num,type, grade);
	}
	
	/**
	 * 학생 삭제
	 * 
	 * @param num
	 * @throws Exception 
	 */
	public void studentDelete(int num) throws Exception {
        StudentDAO dao = new StudentDAO();
        dao.delete(num);
    }
	
	/**
	 * 학생 검색
	 * 
	 * @param num
	 * @return 
	 * @throws Exception 
	 */
	public ArrayList<StudentVO> studentSearch(String keyword) {
        StudentDAO dao = new StudentDAO();
        ArrayList<StudentVO> studentList = dao.search(keyword);
        
        return studentList;
    }
	
	//과목 추가
	public void subjectUpdate(String subject) throws Exception {
		StudentDAO dao = new StudentDAO();
		dao.addNewSubjectColumn(subject);
	}
}
