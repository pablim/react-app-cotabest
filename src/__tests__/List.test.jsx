import renderer from 'react-test-renderer';
import List from '../components/List';
import {
    getCharactersRequest
} from '../api/services/Characters'

it('list rendering', async () => {
    var list = [];
    await getCharactersRequest().then(response => {
        list = response.data.results
    })

    const component = renderer.create(
        <List characterList={list} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});