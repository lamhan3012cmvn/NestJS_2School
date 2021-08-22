# Quy tắc commit code

### ( Làm sao commit code cho hiệu quả)

## Cấu trúc

#### <span style="color:red"><center>[type: optional] description</center></span>
<br>
### Một số type phổ biến:

#### &nbsp;&nbsp;&nbsp; 1.1. <span style="color:red">feat: </span> Thêm mới một feature

#### &nbsp;&nbsp;&nbsp; 1.2. <span style="color:red">fix: </span> fix bug cho hệ thống

#### &nbsp;&nbsp;&nbsp; 1.3. <span style="color:red">refactor: </span> sửa code nhưng không fix bug cũng không thêm feature hoặc đôi khi bug cũng được fix từ việc refacto

#### &nbsp;&nbsp;&nbsp; 1.4. <span style="color:red">docs: </span> thêm/thay đổi document

#### &nbsp;&nbsp;&nbsp; 1.5. <span style="color:red">chore: </span> những sửa đổi nhỏ nhặt không liên quan tới code

#### &nbsp;&nbsp;&nbsp; 1.6. <span style="color:red">style: </span> những thay đổi không làm thay đổi ý nghĩa của code như thay đổi css/ui chẳng hạn

#### &nbsp;&nbsp;&nbsp; 1.7. <span style="color:red">perf: </span> code cải tiến về mặt hiệu năng xử lý

#### &nbsp;&nbsp;&nbsp; 1.8. <span style="color:red">vendor: </span> cập nhật version cho các dependencies, packages

### Tóm tắt các quy tắc:

<div>
  <p>Các quy tắc cũng khá đơn giản và dễ nhớ. Khi viết commit theo cấu trúc bên trên là chúng ta đã tuân thủ gần hết bộ quy tắc này rồi, điểm qua bao gồm:<p>
  <ul>
    <li>Commit message phải có prefix là một type (dạng danh từ) như feat, fix.. Theo ngay sau là scoped (nếu có) và một dấu hai chấm và khoảng trắng như chúng ta vừa đề cập ở trên. VD: feat:, fix:.</li>
    <li><span style="color:red">feat type: </span> này thì bắt buộc phải sử dụng khi thêm một feature</li>
    <li><span style="color:red">fix type: </span>này bắt buộc phải sử dụng khi fix bug</li>
    <li>Nếu có scope, scope phải là một danh từ mô tả về vùng code thay đổi và phải đặt ngay sau type. VD: feat(authentication).</li>
    <li>Một <span style="color:red">description: </span> phải là mô tả ngắn về các thay đổi trong commit và phải ở sau một khoảng trắng sau <span style="color:red">type/scope: </span></li>
    <li>Một commit dài thì có thể có phần body ngay sau description, cung cấp ngữ cảnh về các thay đổi. Phải có một dòng trắng giữa description và body.</li>
    <li>
    Phần footer có thể được đặt ngay sau body, phải có một dòng trắng giữa body và footer. Footer phải chứ các thông tin mở rộng về commit như các pull request liên quan, các người review, breaking changes. Mỗi thông tin trên một dòng.
    </li>
    <li>
    Các type khác feat và fix có thể được sử dụng trong commit message.
    </li>
  </ul>
  <p>Nhìn chung mấy cái bên trên này chúng ta không phải nhớ nhiều vì khi viết commit theo cấu trúc ở phần một là nó đã đúng hết luôn rồi. 😄 Ngoài ra còn một vài quy tắc khác như:</p>
  <ul>
    <li>
    Commit breaking changes thì phải chỉ rõ ngay khi bắt đầu body hoặc footer với từ khóa BREAKING CHANGE viết hoa. Theo sau là dấu hai chấm và một khoảng trắng.
    <p><span style="color:red">Example: </span></p>
    <p>
      feat(oauth): add scopes for oauth apps
    </p>
    <p>BREAKING CHANGE: environment variables now take precedence over config files.</p>
    </li>
    <br>
    <li> Một description nữa phải được cung cấp ngay sau BREAKING CHANGE, mô tả những thay đổi của API. 
    <p><span style="color:red">Example: </span></p>
    <p>BREAKING CHANGE: environment variables now take precedence over config files.</p>
    </li>
  </ul>
</div>
