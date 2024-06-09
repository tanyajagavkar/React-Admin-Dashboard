import './recentsalestable.css'

function RecentSalesTable({ items }) {
  const handleStatus = (status) => {
    switch (status) {
      case 'Approved':
        return 'badge-success'; // Green color for Approved
      case 'Pending':
        return 'badge-warning'; // Yellow color for Pending
      case 'Rejected':
        return 'badge-danger'; // Red color for Rejected
      default:
        return 'badge-primary'; // Blue color for other statuses
    }
  };

  return (
    <table className='table table-borderless datatable'>
      <thead className='table-light'>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Customer</th>
          <th scope='col'>Product</th>
          <th scope='col'>Price</th>
          <th scope='col'>Status</th>
        </tr>
      </thead>
      <tbody>
        {items && items.length > 0 && items.map(item => (
          <tr key={item._id}>
            <th scope='row'>
              <a href='#'>{item.number}</a>
            </th>
            <td>{item.customer}</td>
            <td>
              <a href='#' className='text-primary'>
                {item.product}
              </a>
            </td>
            <td>${item.price.toFixed(2)}</td>
            <td>
              <span className={`badge ${handleStatus(item.status)}`}>
                {item.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RecentSalesTable;
