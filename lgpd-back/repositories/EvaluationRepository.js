import Evaluation from "../models/Evaluation.js";

const saveEvaluation = async (evaluationModel) => {
    const save= await Evaluation.create(evaluationModel);
    return save;
};

const getAllEvaluations = async () => {
    return await Evaluation.findAll({
        order: [
            ['id', 'ASC']
        ]}
    );
};

const getEvaluationById = async (id) => {
    const evaluation = await Evaluation.findByPk(id);
    return evaluation;
};

const deleteEvaluationById = async (id) => {
    return await Evaluation.destroy({where: { id: id }});
};

const updateEvaluationById = async (id, evaluationModel) => {
    try {
        const result = await Evaluation.update(evaluationModel, {where: { id: id }});
        if (result[0] === 1) {
            return {message: 'Avaliação atualizada com sucesso!'};
        } else {
            return {message: 'Avaliação não encontrado ${id} para atualizar!', status: 404};
        }
    } catch (error) {
        console.log(error);
    }
};

const factory= {

    saveEvaluation,
    getAllEvaluations,
    getEvaluationById,
    deleteEvaluationById,
    updateEvaluationById

}

export default factory;