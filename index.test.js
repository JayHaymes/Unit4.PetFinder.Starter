

document.addEventListener('DOMContentLoaded', async () => {
    try{
      const response = await fetch('http://localhost:8080/api/v1/pets')
      if (!response.ok){
          throw new Error('Failed to fetch pets')
      }
      const pets = await response.json();
      const petList = document.getElementById('pet-list')
      console.log(pets)
      pets.forEach(pet => {
          const listItem = document.createElement('li');
          listItem.classList.add('pet-item');
          listItem.innerHTML = `Name:${pet.name}<br> Owner:${pet.owner}<br> Breed:${pet.breed}<br> Age:${pet.age} <br>Phone Number:${pet.telephone}`
          petList.appendChild(listItem);
      })
    }catch(error){
      console.error(error)
    }
  });