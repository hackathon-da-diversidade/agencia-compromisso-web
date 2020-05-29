const fill = (wrapper, value, id, type) => {
  wrapper
    .find(`${type}[name=\'${id}\']`)
    .first()
    .simulate('change', { target: { name: id, value: value } });
};

const fillInput = (wrapper, value, id) => fill(wrapper, value, id, 'input');
const fillSelect = (wrapper, value, id) => fill(wrapper, value, id, 'select');
const fillTextarea = (wrapper, value, id) =>
  fill(wrapper, value, id, 'textarea');

const resolvePromises = async wrapper => {
  await new Promise(resolve => setImmediate(resolve));

  if (wrapper) {
    wrapper.update();
  }
};

export {
  fillInput,
  fillSelect,
  fillTextarea,
  resolvePromises,
};
