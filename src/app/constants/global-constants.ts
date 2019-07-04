import { Link } from '../dto/link';

export class GlobalConstants {
    static headerLinks: Link[] = [
        new Link('Resume', '/resume'),
        new Link('Sudoku', '/sudoku'),
        new Link('Contact', '/contact'),
        new Link('API Integration', '/api_integration')
    ];
}
