export const validate = (value, setMessage, key) => {

  const validation = {
    username: { isEmpty: true, minLength: 3 },
    password: { isEmpty: true, minLength: 3 },
    gender: { isEmpty: false, minLength: 1 },
    firstname: { isEmpty: true, minLength: 2 },
    lastname: { isEmpty: true, minLength: 3 },
    date: { isEmpty: true, minLength: 1 },
    age: { isEmpty: true, minLength: 1 },
    email: { isEmpty: true, minLength: 1 },
    phone: { isEmpty: true, minLength: 2 },
    city: { isEmpty: true, minLength: 1 },
    state: { isEmpty: true, minLength: 1 },
    country: { isEmpty: true, minLength: 2 },
  };

  let message = [];

  for (const property in validation[key]) {
    switch (property) {
      case "minLength":
        value.length < validation[key][property] + 1 && message.push(`Введите больше ${validation[key][property]} символов`)
        break;
      case "isEmpty":
        !value && message.push("Поле не должно быть пустым");
        break;
      default:
        break;
    }
  }

  setMessage(message);
};
