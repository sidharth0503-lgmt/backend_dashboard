import React from 'react';
import './Inventory.css';

const Inventory = () => {
  const medicines = [
    {
      id: 1,
      name: 'Pathagile Medicine',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_lSpTIPIZi4pVdxbHtwDkSzg5BPB7ODVXaw&s',  // Replace with real image URL
      price: '$25',
      description: 'Repair damaged hair',
      manufacturer: 'Pathagile ',
      uses: 'Protects from dandruff',
    },
    {
      id: 2,
      name: 'Pathangile Medicine',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBn95Utl-D8RjY5koLgkpcinAnpVAuDezRPg&s',  // Replace with real image URL
      price: '$500',
      description: 'Natural process Like home incredints',
      manufacturer: 'Pathangile',
      uses: 'tooth to be strong',
    },
    {
      id: 3,
      name: 'pathangile Medicine',
      img: 'https://i.ytimg.com/vi/_snxKu6SfLM/sddefault.jpg',  // Replace with real image URL
      price: '$400',
      description: 'Good for musiles relife',
      manufacturer: 'pathangile',
      uses: 'Helps in increasing immunity',
    },
    {
      id: 4,
      name: 'pathangile Medicine',
      img: 'https://i.ytimg.com/vi/_snxKu6SfLM/sddefault.jpg',  // Replace with real image URL
      price: '$400',
      description: 'Good for musiles relife',
      manufacturer: 'pathangile',
      uses: 'Helps in increasing immunity',
    },
    {
      id: 5,
      name: 'pathangile Medicine',
      img: 'https://www.pharmaadda.in/wp-content/uploads/2019/04/List-Of-Ayurvedic-Medicine-Manufacturer-in-India-2-1024x683.jpg',  // Replace with real image URL
      price: '$400',
      description: 'Good for musiles relife',
      manufacturer: 'pathangile',
      uses: 'Helps in increasing immunity',
    },
    {
      id: 6,
      name: 'pathangile Medicine',
      img: 'https://www.india-tours.com/blog/wp-content/uploads/2020/03/ayurveda1-in-kerala-india-tours.com_.jpg',  // Replace with real image URL
      price: '$400',
      description: 'Good for musiles relife',
      manufacturer: 'pathangile',
      uses: 'Helps in increasing immunity',
    },
    {
      id: 7,
      name: 'pathangile Medicine',
      img: 'https://c8.alamy.com/comp/GH39K4/a-young-indian-doctor-preparing-traditional-ayurvedic-herbal-medicine-GH39K4.jpg',  // Replace with real image URL
      price: '$400',
      description: 'Good for musiles relife',
      manufacturer: 'pathangile',
      uses: 'Helps in increasing immunity',
    },
    {
      id: 8,
      name: 'pathangile Medicine',
      img: 'https://static.vecteezy.com/system/resources/previews/035/978/179/large_2x/ai-generated-indian-ayurveda-herbal-medicine-free-photo.jpg',  
      Price:'$500',
      description: 'Good for musiles relife',
      manufacturer: 'pathangile',
      uses: 'Helps in increasing immunity',
    },
  ];

  return (
    <div className="inventory-container">
      <h2>Medicine Inventory</h2>
      <div className="medicine-grid">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="medicine-item">
            <img src={medicine.img} alt={medicine.name} className="medicine-image" />
            <h3>{medicine.name}</h3>
            <p className="price">{medicine.price}</p>  {/* Styled price */}
            <p className="description">{medicine.description}</p>  {/* Styled description */}
            <p className="manufacturer">{medicine.manufacturer}</p>  {/* Styled manufacturer */}
            <p className="uses">{medicine.uses}</p>  {/* New uses field */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
