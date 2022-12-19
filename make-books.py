import re, shutil
from csv import DictReader

with open('books.csv', 'r') as file:
	reader = DictReader(file)

	for row in reader:
		title = row['title_sort'].split(':')[0]
		friendlyTitle = re.sub(r'[^\w\d-]','-',title).lower()
		shutil.copyfile(row['cover'], 'assets/img/books/' + friendlyTitle + '.jpg')

		with open('_books/' + friendlyTitle + '.md', 'w') as bookFile:
			bookFile.write('---\n')
			bookFile.write('title: "{}"\n'.format(row['title']))
			bookFile.write('header:\n')
			bookFile.write('  teaser: /assets/img/books/{}.jpg\n'.format(friendlyTitle))
			bookFile.write('---\n')
			print (row['authors'])
			bookFile.close()

	file.close()