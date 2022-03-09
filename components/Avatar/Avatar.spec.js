import Avatar from '.';
import { shallow } from 'enzyme';

describe("Avatar Component", () => {
    it("should render a default size avatar (small)", () => {
        const avatar = shallow(<Avatar />);
        expect(avatar.hasClass('w-10')).toEqual(true)
    })
    it("should render a custom size avatar", () => {
        const avatar = shallow(<Avatar size="large"/>);
        expect(avatar.hasClass('w-36')).toEqual(true)
    })
})