import { Classroom_model } from "../models/Classroom_model.js";
import { School_model } from "../models/Schools_model.js"

export const Classroom_service = {
  async getAll() {
    return Classroom_model.getAll();
  },

  async create(name, school_id) {
    const schools = await School_model.getAll()
    const is_valid_school_id = (await schools).some(item => item.id === school_id)

    if(is_valid_school_id === false){
        throw new Error("INVALID_SCHOOL_ID");
    }
    
    return Classroom_model.create(name, school_id);
  }
};
