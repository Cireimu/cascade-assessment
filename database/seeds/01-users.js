exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          email: "testuser0@test.com",
          password: "NotVerySecurePassword",
          phone_number: 7029454922,
        },
        {
          id: 2,
          email: "testuser1@test.com",
          password: "NotVerySecurePassword",
          phone_number: 7021234922,
        },
        {
          id: 3,
          email: "testuser2@test.com",
          password: "NotVerySecurePassword",
          phone_number: 7029451234,
        },
      ]);
    });
};
