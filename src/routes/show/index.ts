
export async function get({ params }) {
  const meta = await fetch(`https://db.lahs.club/cache/761269d6997543f5a1b86c0bd17e9ef3.json`)
    .then((res: any) => res.json()) as any[];
  const selectedShow = meta.find((show: any) => show.Primary);
 
  return {
    status: 302,
    headers: new Headers({location: `/show/${selectedShow.Short}`}),
  };
}