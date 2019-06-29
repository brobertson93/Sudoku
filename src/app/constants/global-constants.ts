import { Link } from '../dto/link';

export class GlobalConstants {
    static headerLinks: Link[] = [
        new Link('Resume', '/'),
        new Link('Sudoku', '/contact'),
        new Link('Contact', '/sudoku')
    ];
}
