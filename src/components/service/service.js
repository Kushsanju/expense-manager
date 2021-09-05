import axios from "axios";
import walletReducer from "../../reducers/walletReducer";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/transaction";

class service {

    getAll(expense) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + expense);
    }
    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
    getEmployeeById(expense, employeeId) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + expense + '/' + employeeId);
    }
    updateEmployee(expense, employee, employeeId) {
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + expense + '/' + employeeId, employee);
    }
    deleteEmployee(expense, employeeId) {
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + expense + '/' + employeeId);
    }
}
export default new service()
