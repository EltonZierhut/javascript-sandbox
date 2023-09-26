function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: "John Doe",
        email: "teste@teste.com",
      });
    }, 1000);
  });
}

function getPhone(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        phone: "999999999",
        ddd: 11,
      });
    }, 2000);
  });
}

function getAddress(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        street: "Street 1",
        number: 123,
      });
    }, 2000);
  });
}

async function main() {
  try {
    console.time("measure-promise");
    const user = await getUser();
    // const phone = await getPhone(user.id);
    // const address = await getAddress(user.id);

    const result = await Promise.all([getPhone(user.id), getAddress(user.id)]);

    const phone = result[0];
    const address = result[1];

    console.log(`
      Name: ${user.name}
      Phone: (${phone.ddd}) ${phone.phone}
      Address: ${address.street}, ${address.number}
    `);

    console.timeEnd("measure-promise");
  } catch (error) {
    console.error("Error: ", error);
  }
}

main()
  .then(() => {
    console.log("End");
  })
  .catch((error) => {
    console.error("Error: ", error);
  });

// console.log("End");
