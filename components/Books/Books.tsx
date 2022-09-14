import Factory from '../_layouts/Factory/Factory';
import BooksView from './BooksView';
import useBooks from './useBooks';

const Books = Factory(useBooks,BooksView)
export default Books