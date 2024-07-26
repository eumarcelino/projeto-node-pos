import Course from "../models/Course.js";

const saveCourse = async (courseModel) => {
    const save= await Course.create(courseModel);
    return save;
};

const getAllCourses = async () => {
    return await Course.findAll({
        order: [
            ['id', 'ASC']
        ]}
    );
};

const getCourseById = async (id) => {
    const course = await Course.findByPk(id);
    return course;
};

const deleteCourseById = async (id) => {
    return await Course.destroy({where: { id: id }});
};

const updateCourseById = async (id, courseModel) => {
    try {
        const result = await Course.update(courseModel, {where: { id: id }});
        if (result[0] === 1) {
            return {message: 'Curso atualizado com sucesso!'};
        } else {
            return {message: 'Curso não encontrado ${id} para atualizar!', status: 404};
        }
    } catch (error) {
        console.log(error);
    }
};

const factory= {
    saveCourse,
    getAllCourses,
    getCourseById,
    deleteCourseById,
    updateCourseById
}

export default factory;