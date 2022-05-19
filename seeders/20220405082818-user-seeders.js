'use strict';
const bcrypt = require('bcrypt')
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

      await queryInterface.bulkInsert('users', [
        {
          name: 'Ridki',
          profession: 'BE',
          role: 'admin',
          email: 'rifki@gmail.com',
          password: await bcrypt.hash('rahasia', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Yoma',
          profession: 'DEVOPS',
          role: 'student',
          email: 'Yoma@gmail.com',
          password: await bcrypt.hash('rahasia', 10),
          created_at: new Date(),
          updated_at: new Date(),
        }
      ]);
    },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('users', null, {});
     */
      await queryInterface.bulkDelete('users', null, {});
    }
};
