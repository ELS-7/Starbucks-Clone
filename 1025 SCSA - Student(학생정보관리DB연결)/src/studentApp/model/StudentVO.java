package studentApp.model;
import java.util.Map;

public class StudentVO {
    private int num;
    private String name;
    private Map<String, String> grades;

    public StudentVO(int num, String name, Map<String, String> grades) {
        this.num = num;
        this.name = name;
        this.grades = grades;
    }


    public int getNum() { return num; }
    public String getName() { return name; }
    public Map<String, String> getGrades() { return grades; }

    public void setNum(int num) { this.num = num; }
    public void setName(String name) { this.name = name; }
    public void setGrades(Map<String, String> grades) { this.grades = grades; }
}