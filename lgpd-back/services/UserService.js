import userRepository from "../repositories/UserRepository.js";

const saveUser = (userModel) => {
    return userRepository.saveUser(userModel);
}

const getUserById = (id) => {
    return userRepository.getUserById(id);
}

const getAllUsers = () => {
    return userRepository.getAllUsers();
}

const deleteUserById = (id) => {
    return userRepository.deleteUserById(id);
}

const updateUserById = (userModel) => {
    return userRepository.updateUserById(userModel);
}

const service = {
    saveUser,
    getUserById,
    getAllUsers,
    deleteUserById,
    updateUserById
}
export default service;