import React from 'react';
// tempat dari form
class Form extends React.Component {  
constructor(props) {
  super(props);
  this.state = {
    nama: '',
    email: '',
    status: '',
    saran: '',  
};
}


onChange = (event) => {
 const {name, value} = event.target
  this.setState({[name]: value});
}


onSubmit=(event) => {
  const{nama,email,status,saran}= this.state;

window.confirm(`Apakah benar Nama ${nama}, ${email}, ${status} dan sarannya adalah ${saran}`);
event.preventDefault()
}

componentDidUpdate(){
  console.log(this.state)
}

render(){
  const {nama,saran, email,status} = this.state;

 return(
  <div >
  <form
   onSubmit={this.onSubmit} 
  style={{display: 'flex', flexDirection: 'column', width: '250px' }}>
      <label>Nama:
        <input type="text" name="nama" value={nama} onChange={this.onChange}/></label>
        <label>Email:
        <input type="text" name="email" value={email} onChange={this.onChange}/></label>
     
      <label> Status:
      <select name="status" 
      value={status} onChange={this.onChange} 
      >
        <option value="Pelajar">Pelajar</option>
        <option value="Karyawan">Karyawan</option>
        <option value="Buruh">Buruh</option>
        <option value="Wirausaha">Wirausaha</option>
      </select>
      </label>
      <label>Saran:
        <textarea name='saran' 
        value={saran} onChange= {this.onChange} 
        rows="3" >
        </textarea></label>
      <input type="submit" value="Submit" />
  </form>
</div>
 )
}  
};

export default Form;