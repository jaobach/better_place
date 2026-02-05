import { Student_model } from "../models/Student_model.js";
import { Classroom_model } from "../models/Classroom_model.js";

export const Student_service = {
  async getAll(classroom_id) {

    //VLIDAR SE A CLASSROOM EXISTE NA ESCOLA ATUAL
    return Student_model.getAll(classroom_id);
  },

  async create(name, classroom_id, age) {
    const classrooms = await Classroom_model.getAll()
    const is_valid_classroom_id = (await classrooms).some(item => item.id === classroom_id)

    if(is_valid_classroom_id === false){
        throw new Error("INVALID_CLASSROOM_ID");
    }
    
    return Student_model.create(name, classroom_id, age);
  }
};
