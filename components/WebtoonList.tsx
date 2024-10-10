// components/WebtoonList.tsx

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import WebtoonForm from './WebtoonForm';

interface Webtoon {
  id: number;
  title: string;
  genre: string;
  releaseDate: string;
  chapters: number;
  description: string;
}

export default function WebtoonList() {
  const queryClient = useQueryClient();
  const [selectedWebtoon, setSelectedWebtoon] = useState<Webtoon | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const { data, isLoading, isError, error } = useQuery<Webtoon[], Error>({
    queryKey: ['webtoons'],
    queryFn: async () => {
      const response = await axios.get('/api/webtoons');
      return response.data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`/api/webtoons/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['webtoons'] });
    },
  });

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
    setShowDeleteModal(false);
    setSelectedWebtoon(null);
  };

  if (isLoading) return <progress className="progress w-56"></progress>;
  if (isError) return <p>Erreur lors du chargement des webtoons : {error.message}</p>;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {data?.map((webtoon) => (
          <div key={webtoon.id} className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h2 className="card-title">{webtoon.title}</h2>
              <p>
                <strong>Genre:</strong> {webtoon.genre}
              </p>
              <p>
                <strong>Date de parution:</strong>{' '}
                {new Date(webtoon.releaseDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Chapitres:</strong> {webtoon.chapters}
              </p>
              <p>{webtoon.description}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedWebtoon(webtoon);
                    setShowEditModal(true);
                  }}
                >
                  Éditer
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => {
                    setSelectedWebtoon(webtoon);
                    setShowDeleteModal(true);
                  }}
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modale de suppression */}
      {showDeleteModal && selectedWebtoon && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Confirmer la suppression</h3>
            <p className="py-4">
              Êtes-vous sûr de vouloir supprimer &quot;{selectedWebtoon.title}&quot; ?
            </p>
            <div className="modal-action">
              <button
                onClick={() => handleDelete(selectedWebtoon.id)}
                className="btn btn-error"
              >
                Oui, supprimer
              </button>
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedWebtoon(null);
                }}
                className="btn"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modale d'édition */}
      {showEditModal && selectedWebtoon && (
        <div className="modal modal-open">
          <div className="modal-box">
            <WebtoonForm webtoon={selectedWebtoon} />
            <div className="modal-action">
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setSelectedWebtoon(null);
                }}
                className="btn"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
