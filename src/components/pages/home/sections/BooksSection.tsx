import styles from './BooksSection.module.scss';

interface Book {
	id: number;
	title: string;
	author: string;
	coverUrl: string;
}

export const BooksSection = () => {
	const popularBooks: Book[] = [
		{
			id: 1,
			title: 'Преступление и наказание',
			author: 'Ф.М. Достоевский',
			coverUrl:
				'https://cdn.ast.ru/v2/ASE000000000829671/COVER/cover1__w220.jpg'
		},
		{
			id: 2,
			title: 'Идиот',
			author: 'Ф.М. Достоевский',
			coverUrl: '/images/thebooks.png'
		},
		{
			id: 3,
			title: 'Бесы',
			author: 'Ф.М. Достоевский',
			coverUrl: '/images/book3.jpg'
		},
		{
			id: 4,
			title: 'Подросток',
			author: 'Ф.М. Достоевский',
			coverUrl: '/images/book4.jpg'
		},
		{
			id: 5,
			title: 'Записки из подполья',
			author: 'Ф.М. Достоевский',
			coverUrl: '/images/book5.jpg'
		},
		{
			id: 6,
			title: 'Записки для себя',
			author: 'Ф.М. Достоевский',
			coverUrl: '/images/book6.jpg'
		}
	];

	const collectionBooks: Book[] = [
		{
			id: 7,
			title: 'Название для семинара',
			author: 'Автор 1',
			coverUrl:
				'https://cdn.ast.ru/v2/ASE000000000829671/COVER/cover1__w220.jpg'
		},
		{
			id: 8,
			title: 'Название для Бога',
			author: 'Автор 2',
			coverUrl: '/images/collection2.jpg'
		},
		{
			id: 9,
			title: 'Название для диплома',
			author: 'Автор 3',
			coverUrl: '../assets/BookSection/thebooks.png'
		},
		{
			id: 10,
			title: 'Название для спортсмена',
			author: 'Автор 4',
			coverUrl: '/images/collection4.jpg'
		},
		{
			id: 11,
			title: 'Название для студента',
			author: 'Автор 5',
			coverUrl: '/images/collection5.jpg'
		},
		{
			id: 12,
			title: 'Название для врача',
			author: 'Автор 6',
			coverUrl: '/images/collection6.jpg'
		}
	];

	return (
		<section className={styles.booksSection}>
			<h2>ЭЛЕКТРОННЫЕ КНИГИ</h2>

			<div className={styles.bookCategory}>
				<h3>Популярные книги</h3>
				<div className={styles.bookGrid}>
					{popularBooks.map((book) => (
						<div key={book.id} className={styles.bookCard}>
							<img src={book.coverUrl} alt={book.title} />
							<h4>{book.title}</h4>
							<p>{book.author}</p>
						</div>
					))}
				</div>
			</div>

			<div className={styles.bookCategory}>
				<h3>Коллекции книг</h3>
				<div className={styles.bookGrid}>
					{collectionBooks.map((book) => (
						<div key={book.id} className={styles.bookCard}>
							<img src={book.coverUrl} alt={book.title} />
							<h4>{book.title}</h4>
							<p>{book.author}</p>
						</div>
					))}
				</div>
			</div>

			<button className={styles.Btn}>Ещё</button>
		</section>
	);
};
