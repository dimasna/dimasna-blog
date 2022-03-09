import Bio from '.';
import { shallow } from 'enzyme';
import ReadMore from '../ReadMore';



describe("Bio Component", () => {
    it("should render Readmore Component", () => {
        const bio = shallow(<Bio />);
        expect(bio.containsMatchingElement(<ReadMore/>)).toEqual(true)
    })
  
    
})