import styles from './Rooms.module.scss';

interface Room {
  id: number;
  name: string;
  adress: string;
  description: string;
  imageUrl: string;
}

const RoomsSection = () => {
  const rooms: Room[] = [
    {
      id: 1,
      name: 'БОЛЬШОЙ КОНФЕРЕНЦ ЗАЛ',
      adress: 'Манаса45',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nisl nisl vel nisl. Sed euismod, nisl vel ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nisl nisl vel nisl.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5PMFlkVuSJfHafuxqiAFqgjb6Yf0HzWijg&s',
    },
    {
      id: 2,
      name: 'БОЛЬШОЙ КОНФЕРЕНЦ ЗАЛ',
      adress: 'Манаса45',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nisl nisl vel nisl. Sed euismod, nisl vel ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nisl nisl vel nisl.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5PMFlkVuSJfHafuxqiAFqgjb6Yf0HzWijg&s',
    },
  ];

  return (
    <section className={styles.roomsSection}>
      <div className="container">
      <h2>КОНФЕРЕНЦ ЗАЛЫ</h2>
      <div className={styles.roomsContainer}>
        {rooms.map((room) => (
          <div key={room.id} className={styles.roomCard}>
            <img src={room.imageUrl} alt={room.name} />
            <h3>{room.name}</h3>
            <p className={styles.adress}>{room.adress}</p>
            <p>{room.description}</p>
          </div>
        ))}
      </div>
      <button className={styles.Btn}>Ещё</button>
      </div>
    </section>
  );
};

export default RoomsSection;