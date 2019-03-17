export default function(state={},action){
    console.log('action.type::'+action.type+'Payload::'+JSON.stringify(action.payload));
    switch(action.type){
        case 'LOGIN':
        return {username:'Dharmedra',pwd:'111111'}
     default:
      return state;
    }
}