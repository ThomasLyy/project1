// components/WebtoonForm.tsx

import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

interface Webtoon {
  id?: number;
  title: string;
  genre: string;
  releaseDate: string;
  chapters: number;
  description: string;
}

export default function WebtoonForm({ webtoon }: { webtoon?: Webtoon }) {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<Webtoon>(
    webtoon || {
      title: '',
      genre: '',
      releaseDate: '',
      chapters: 0,
      description: '',
    }
  );

  const mutation = useMutation({
    mutationFn: async (newWebtoon: Webtoon) => {
      if (webtoon && webtoon.id) {
        return await axios.put(`/api/webtoons/${webtoon.id}`, newWebtoon);
      } else {
        return await axios.post('/api/webtoons', newWebtoon);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['webtoons'] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
    setFormData({
      title: '',
      genre: '',
      releaseDate: '',
      chapters: 0,
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-base-200 rounded-lg">
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Titre</span>
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Genre</span>
        </label>
        <input
          type="text"
          value={formData.genre}
          onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Date de parution</span>
        </label>
        <input
          type="date"
          value={formData.releaseDate}
          onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Nombre de chapitres</span>
        </label>
        <input
          type="number"
          value={formData.chapters}
          onChange={(e) => setFormData({ ...formData, chapters: Number(e.target.value) })}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="textarea textarea-bordered w-full"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-4">
        {webtoon ? 'Mettre à jour' : 'Ajouter'}
      </button>
    </form>
  );
}
