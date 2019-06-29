import { Link } from '../dto/link';

export class GlobalConstants {
    static headerLinks: Link[] = [
        new Link('Resume', '/'),
        new Link('Sudoku', '/sudoku'),
        new Link('Contact', '/contact')
    ];
}
