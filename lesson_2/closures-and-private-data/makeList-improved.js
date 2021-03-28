// eslint-disable-next-line max-lines-per-function
function makeList() {
  const items = [];
  return {
    add(item) {
      items.push(item);
      console.log(item + ' added!');
    },
    list() {
      if (items.length) {
        items.forEach(item => console.log(item));
      } else console.log('The list is empty.');
    },
    remove(item) {
      let index = items.indexOf(item);
      if (index === -1) {
        items.push(item);
        console.log(item + ' added!');
      } else {
        items.splice(index, 1);
        console.log(item + ' removed!');
      }
    },
  };
}

let list = makeList();
list.add('peas');
// peas added!

list.list();
// peas

list.add('corn');
// corn added!

list.list();
// peas
// corn

list.remove('peas');
// peas removed!

list.list();
// corn

console.log(list.items);
