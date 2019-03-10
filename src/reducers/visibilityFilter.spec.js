import { toggleVisibility } from '../actions/toggleVisibility';
import visibilityFilter from './visibilityFilter'
import VisibilityFilters from '../constants/visibilityFilters'


describe('visibility filter reducer', () => {
  it("should have todo as default visibility", () => {
    expect(visibilityFilter(undefined, {type: 'DUMMY'})).toEqual(VisibilityFilters.TODO);
  });

  it("should change to the specified visibility", () => {
    expect(visibilityFilter(VisibilityFilters.DONE, toggleVisibility(VisibilityFilters.ALL))).toEqual(VisibilityFilters.ALL)
  });
})