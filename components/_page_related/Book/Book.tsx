import Factory from '../../_layouts/Factory/Factory';
import BookView from './BookView';
import useBook from './useBook';

const Books = Factory(useBook,BookView)
export default Books