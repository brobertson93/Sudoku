import { Link } from '../dto/link';

export class GlobalConstants {
    static headerLinks: Link[] = [
        new Link('Resume', '/resume'),
        new Link('Sudoku', '/sudoku'),
        new Link('Contact', '/contact'),
        new Link('Data Display', '/data_display')
    ];
}
