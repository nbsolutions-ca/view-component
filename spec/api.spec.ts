
import * as api from '../src/api';
import defaultapi from '../src/api';
import {ViewComponent} from '../src/ViewComponent';

describe('Public API', () => {
    it('default', () => {
        expect(ViewComponent).toBe(defaultapi);
    });

    it('ViewComponent', () => {
        expect(api.ViewComponent).toBe(ViewComponent);
    });
});
