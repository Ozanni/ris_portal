import { factory, primaryKey } from '@mswjs/data';
import { DATABASE_INSTANCE } from '@mswjs/data/lib/glossary';

const models = {
  user: {
    id: primaryKey(String),
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    teamId: String,
    role: String,
    bio: String,
    createdAt: Number,
  },
  team: {
    id: primaryKey(String),
    name: String,
    description: String,
    createdAt: Number,
  },
  discussion: {
    id: primaryKey(String),
    title: String,
    body: String,
    teamId: String,
    createdAt: Number,
  },
  comment: {
    id: primaryKey(String),
    body: String,
    authorId: String,
    discussionId: String,
    createdAt: Number,
  },
};

export const db = factory(models);

type DBKeyTypes = keyof typeof db;
export type Model = Exclude<DBKeyTypes, typeof DATABASE_INSTANCE>;

export const loadDb = () =>
  Object.assign(JSON.parse(window.localStorage.getItem('msw-db') || '{}'));

export const persistDb = (model: Model) => {
  if (import.meta.env.MODE === 'test') return;
  const data = loadDb();
  data[model] = db[model].getAll();
  window.localStorage.setItem('msw-db', JSON.stringify(data));
};

export const initializeDb = () => {
  const database = loadDb();
  Object.entries(db).forEach(([key, model]) => {
    const dataEntres = database[key];
    if (dataEntres) {
      dataEntres?.forEach((entry: Record<string, unknown>) => {
        model.create(entry);
      });
    }
  });
};

export const resetDb = () => {
  window.localStorage.clear();
};

initializeDb();
