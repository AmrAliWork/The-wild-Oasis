import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";
function CabinTable() {
  const [searchParams] = useSearchParams();
  const { isPending, cabins } = useCabins();
  if (isPending) return <Spinner />;
  if (!cabins.length) return <Empty resource="Cabins" />;

  // filter
  let filteredCabin = cabins;
  const filterValue = searchParams.get("discount") || "all";
  if (filterValue === "no-discount")
    filteredCabin = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabin = cabins.filter((cabin) => cabin.discount !== 0);

  // sort
  const sortValue = searchParams.get("sortBy") || "startDate-asc";
  const [field, diraction] = sortValue.split("-");
  const modifier = diraction === "asc" ? 1 : -1;
  const sortedCabin = filteredCabin.sort((a, b) => {
    const value =
      typeof a[field] === "string"
        ? a[field].localeCompare(b[field])
        : a[field] - b[field];
    return value * modifier;
  });

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabins</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabin}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        ></Table.Body>
      </Table>
    </Menus>
  );
}

export default CabinTable;
