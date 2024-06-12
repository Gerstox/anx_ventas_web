import { fakeClients } from '@/lib/fake-data';
import ListItem from './ClientListItem';

export default function ClientList() {

  const clients = fakeClients;
  
  return (
    <>
      <div className="md:hidden mt-4 flex flex-col gap-1 pt-[40px]">
        {clients.map((client) => (
          <ListItem key={client.id} item={client}></ListItem>
        ))}
      </div>
    </>
  );
}
