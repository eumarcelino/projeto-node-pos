import Teacher from "../models/Teacher.js";

const saveTeacher = async (teacherModel) => {
    const save= await Teacher.create(teacherModel);
    return save;
};

const getAllTeachers = async () => {
    return await Teacher.findAll({
        order: [
            ['id', 'ASC']
        ]}
    );
};

const getTeacherById = async (id) => {
    const teacher = await Teacher.findByPk(id);
    return teacher;
};

const deleteTeacherById = async (id) => {
    return await Teacher.destroy({where: { id: id }});
};

const updateTeacherById = async (id, teacherModel) => {
    try {
        const result = await Teacher.update(teacherModel, {where: { id: id }});
        if (result[0] === 1) {
            return {message: 'Professor atualizado com sucesso!'};
        } else {
            return {message: 'Professor não encontrado ${id} para atualizar!', status: 404};
        }
    } catch (error) {
        console.log(error);
    }
};

const factory= {

    saveTeacher,
    getAllTeachers,
    getTeacherById,
    deleteTeacherById,
    updateTeacherById

}

export default factory;