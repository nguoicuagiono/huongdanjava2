
var contents = [
	"Khung giao diện chính chứa thanh menu, thanh công cụ, và các nút nhấn, có cả đồng hồ ở góc trên bên phải",
	"Nút NEW giúp chúng ta tạo mới một nhân viên nào đó, khi đang có dữ liệu xuất hiện ở ô nhập, nhấn nút new giúp xóa bỏ hết tất cả các ô và nhập lại, đỡ tốn thời gian xóa từng dòng một",
	"Nút ADD giúp chúng ta lưu một nhân viên mới, khi chung ta muốn lưu một nhân viên nào đó chỉ cần nhấn nút ADD là xong ",
	"Nút UPDATE giúp chúng ta chỉnh sữa thay đỗi một thông tin nào đó trong danh sách chúng ta đã lưu, lưu ý không được thay đỗi mã số nhân viên",
	"Nút DELETE giúp chúng ta xóa một nhân viên nào đó mà chúng ta đã lưu, khi muốn xóa một ai đó ta click chuột trái vào nhân viên đó và nhấn nút delete nhân viên đó sẻ được xóa",
	"Nút FIND giúp chúng ta tìm một nhân viên theo mã số nhân viên đã cấp, cách tìm như sau. Ban đầu chúng ta nhấn nút NEW sau đó ở ô nhập mã nhân viên, chúng ta nhập mã nhân viên cần tìm và nhấn nút FIND mã nhân viên cần tìm sẽ hiện ra ",
	"Nút OPEN giúp chúng ta mở các danh sách chúng ta đã nhập và lưu ở một nơi nào đó trong bộ nhớ máy tính của chúng ta",
	"Nút EXIT giúp chúng ta thoát khỏi chương trình khi không muốn sữ dụng nữa, đồng thời khi thoát phần mềm sẽ ra thông báo bạn có muốn lưu lại dữ liệu vừa mới nhập không",
	"Nút SẮP XẾP NHÂN VIÊN THEO LƯƠNG giúp chúng ta sắp xếp lại những ai có lương cao tới thấp",
	"Nút SẮP XẾP NHÂN VIÊN THEO TN giúp chúng ta sắp xếp lại tên từ a-z",
	"Nút XUẤT BÁO CÁO giúp chúng ta xuất những danh sách đã lưu ra file exel"

	];


function loadContent(index) {
	$("p").text(contents[index]);
}
