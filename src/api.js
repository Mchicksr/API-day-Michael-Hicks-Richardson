const Base_URL ='https://thinkful-list-api.herokuapp.com/Michael Hicks Richardson';

function getItems(){
  return fetch(`${Base_URL}/items`).then(function(myRequest){
    return myRequest;
  });
  //return Promise.resolve('A successful response!');
}

function createItem(name){
  let newItem = JSON.stringify({name: name});
  

  return fetch(`${Base_URL}/items`,
    {method:'POST', 
      headers:{'Content-Type': 'application/json'},
      body:newItem});
}

function updateItem(id, updateData){
  return fetch(`${Base_URL}/items/${id}`, 
    {method:'PATCH', 
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(updateData)});
}

function deleteItem(id){
  return fetch(`${Base_URL}/items/${id}`,{method:'DELETE',});
}

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};