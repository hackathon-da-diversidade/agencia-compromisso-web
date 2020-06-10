import React from 'react';
import PhotosForm from './PhotosForm';
import { mount } from 'enzyme';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Dialog from '@material-ui/core/Dialog';

describe('<PhotosForm/>', () => {
  it('should load list', async () => {
    const fileName = 'image.png';
    const file = new File(['(⌐□_□)'], fileName, { type: 'image/png' });
    const photos = [{ photo: file, url: fileName, exists: false }];
    const wrapper = mount(<PhotosForm photos={photos} />);

    expect(wrapper.find(`#photo0`).getDOMNode()).toBeVisible();
  });

  it('should add photo to the list', async () => {
    const wrapper = mount(<PhotosForm />);
    const fileName = 'image.png';
    const file = new File(['(⌐□_□)'], fileName, { type: 'image/png' });

    global.URL.createObjectURL = jest.fn().mockReturnValue(fileName);

    wrapper
      .findWhere((node) => node.text() === 'Adicionar Foto')
      .first()
      .simulate('click');

    wrapper
      .find('input[type="file"]')
      .simulate('change', { target: { files: [file] } });

    expect(wrapper.find(`#photo0`).getDOMNode()).toBeVisible();
  });

  it('should remove photo from the list', async () => {
    const wrapper = mount(<PhotosForm />);
    const fileName = 'image.png';
    const file = new File(['(⌐□_□)'], fileName, { type: 'image/png' });

    global.URL.createObjectURL = jest.fn().mockReturnValue(fileName);

    wrapper
      .find('input[type="file"]')
      .simulate('change', { target: { files: [file] } });

    wrapper.find(`#photo0`).find(DeleteIcon).simulate('click');

    expect(wrapper.find(`#photo0`)).toHaveLength(0);
  });

  it('should call on change', async () => {
    const onChange = jest.fn();
    const wrapper = mount(<PhotosForm onChange={onChange} />);
    const fileName = 'image.png';
    const file = new File(['(⌐□_□)'], fileName, { type: 'image/png' });

    global.URL.createObjectURL = jest.fn().mockReturnValue(fileName);

    wrapper
      .find('input[type="file"]')
      .simulate('change', { target: { files: [file] } });

    expect(onChange).toHaveBeenCalledWith([
      { photo: file, url: fileName, exists: false },
    ]);
  });

  it('should open image', async () => {
    const fileName = 'image.png';
    const file = new File(['(⌐□_□)'], fileName, { type: 'image/png' });
    const photos = [{ photo: file, url: fileName, exists: false }];
    const wrapper = mount(<PhotosForm photos={photos} />);

    wrapper.find(`#photo0`).find(VisibilityIcon).simulate('click');

    const dialog = wrapper.find(Dialog);

    expect(dialog.getDOMNode()).toBeVisible();
    expect(dialog.find(`img[src="${fileName}"]`).getDOMNode()).toBeVisible();
  });

  it('should remove photo from Firebase', async () => {
    const fileName = 'image.png';
    const file = new File(['(⌐□_□)'], fileName, { type: 'image/png' });
    const fileDelete = jest.fn();

    file['delete'] = fileDelete;

    const photos = [{ photo: file, url: fileName, exists: true }];
    const wrapper = mount(<PhotosForm photos={photos} />);

    wrapper.find(`#photo0`).find(DeleteIcon).simulate('click');

    expect(fileDelete).toHaveBeenCalled();
  });
});
