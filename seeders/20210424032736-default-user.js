'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('users', [{
      name: 'John',
      username: 'admin@gmail.com',
      email: 'admin@gmail.com',
      password: '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
      created_at: new Date(),
      updated_at: new Date()
    }]);
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
    */
    await queryInterface.bulkDelete('users', null, {});
  }
};
