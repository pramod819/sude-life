const VALUE_DELIMITER = ',';
const ROW_DELIMITER = '\n';

const getRow = (keys: Array<any>, item: string) =>
  keys.map((k) => removeNewLines(item[k])).join(VALUE_DELIMITER);

const removeNewLines = (value: string) =>
  typeof value === 'string' ? value.replace(/\n/g, ' ') : value;

export const ConvertToCsv = (data: Array<any>) => {
  if (!data || typeof data !== 'object') return '';
  const hasRows = Array.isArray(data);
  const keys = hasRows ? Object.keys(data[0]) : Object.keys(data);
  const rows = hasRows
    ? data.map((item) => getRow(keys, item)).join(ROW_DELIMITER)
    : getRow(keys, data);
  return [keys.join(VALUE_DELIMITER), rows].join(ROW_DELIMITER);
};

export const HandleDownload = (data: string) => {
  const timeStamp = Date.now();
  const fileName = `file-${timeStamp}.csv`;
  const file = new File([data], fileName, { type: 'text/csv;charset=utf-8' });

  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(file);
  link.download = fileName;
  link.click();
};
