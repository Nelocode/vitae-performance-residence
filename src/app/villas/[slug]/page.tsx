import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { VILLAS } from './data';
import VillaClientPage from './VillaClientPage';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const villa = VILLAS[slug];
  if (!villa) return { title: 'Villa Not Found' };
  
  return {
    title: `${villa.name} | VITAE Residences`,
    description: villa.tagline,
  };
}

export default async function VillaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const villa = VILLAS[slug];
  
  if (!villa) {
    notFound();
  }

  return <VillaClientPage villa={villa} />;
}
