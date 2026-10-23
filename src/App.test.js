import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import exercises from './app/exerciseCatalog';

function open(path) {
  return render(
    <MemoryRouter
      initialEntries={[path]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>,
  );
}
beforeEach(() => {
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [{ id: 1, title: 'Post kiểm tra', body: 'Nội dung' }],
  });
});
afterEach(() => {
  jest.restoreAllMocks();
});

test.each(exercises.map(({ id, title }) => [id, title]))(
  'bài %s hiển thị đúng module %s',
  async (id, title) => {
    const log = jest.spyOn(console, 'log').mockImplementation(() => {});
    open(`/exercises/${id}`);
    expect(screen.getByRole('heading', { name: title, level: 1 })).toBeInTheDocument();
    if (id === '13') await screen.findByText('Post kiểm tra');
    expect(
      screen.getByRole('navigation', { name: 'Danh sách bài tập' }),
    ).toBeInTheDocument();
    log.mockRestore();
  },
);

test('trang đầu và menu chỉ chứa đúng nhóm bài của package', () => {
  open('/');
  expect(
    screen.getByRole('heading', { name: exercises[0].title, level: 1 }),
  ).toBeInTheDocument();
  const menu = screen.getByRole('navigation', { name: 'Danh sách bài tập' });
  expect(within(menu).getAllByRole('link')).toHaveLength(exercises.length);
  fireEvent.click(
    within(menu).getByRole('link', {
      name: new RegExp(exercises[exercises.length - 1].id + ' '),
    }),
  );
  expect(
    screen.getByRole('heading', {
      name: exercises[exercises.length - 1].title,
      level: 1,
    }),
  ).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText('Tìm bài tập'), {
    target: { value: exercises[0].id },
  });
  expect(within(menu).getAllByRole('link')).toHaveLength(1);
});

test('route ngoài nhóm có liên kết quay về bài đầu', () => {
  open('/exercises/01');
  expect(screen.getByRole('heading', { name: 'Không tìm thấy bài' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('link', { name: 'Về bài ' + exercises[0].id }));
  expect(
    screen.getByRole('heading', { name: exercises[0].title, level: 1 }),
  ).toBeInTheDocument();
});
test.each([
  ['/exercises/20/users', 'User Profile: Chưa chọn user ID'],
  ['/exercises/20/users/42', 'User Profile: 42'],
  ['/exercises/21/users/2', 'John Smith : 30'],
  ['/exercises/21/dishes/0', 'Uthappizza'],
  ['/exercises/21/users/999', 'Không tìm thấy user ID 999.'],
  ['/exercises/21/dishes/abc', 'Không tìm thấy dish ID abc.'],
  ['/exercises/22/profile', 'User: Guest (không truyền userId)'],
  ['/exercises/22/profile/son?tab=activity', 'Query tab: activity'],
])('route con %s render đúng và không cần nhấn menu trước', (path, text) => {
  open(path);
  expect(screen.getByText(text)).toBeInTheDocument();
});

test('bài 20 menu chuyển page và bài 22 chuyển profile qua Link', () => {
  const view = open('/exercises/20');
  fireEvent.click(
    within(screen.getByRole('navigation', { name: 'Bài 20 navigation' })).getByRole(
      'link',
      { name: 'Products' },
    ),
  );
  expect(screen.getByText('Products Page')).toBeInTheDocument();
  view.unmount();
  open('/exercises/22');
  fireEvent.click(screen.getByRole('link', { name: 'Profile có ID: son' }));
  expect(screen.getByText('User: son')).toBeInTheDocument();
  fireEvent.click(
    screen.getByRole('link', { name: 'Xem tab activity qua query string' }),
  );
  expect(screen.getByText('Query tab: activity')).toBeInTheDocument();
});
