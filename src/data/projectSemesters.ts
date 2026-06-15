export const semesterOrder = [
  'First semester',
  'Second semester',
  'Third semester',
  'Fourth semester',
  'Fifth semester',
  'Sixth semester',
  'Seventh semester',
  'Eighth semester',
  'Ninth semester',
  '10. semester',
];

export function semesterToId(semester: string) {
  return semester
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}