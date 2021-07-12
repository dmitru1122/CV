import { Iform, IformDefault } from "../../../interfaces/allInterfaces";

getTepmlate.propTypes = Iform;
getTepmlate.defaultProps = IformDefault;

function getTepmlate(props) {
  const form = props.form;
  const htmlTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html>
  <head>
  <meta name="viewport" content="width=device-width"/>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <title>Success Craft</title>
  <style>
  



  </style>
  </head>
  <body  topmargin="0" leftmargin="0" marginheight="0" marginwidth="0">
  <table
        align="center"
        style="
          width: 600px;
          background-repeat: repeat;
          background-size: 300px;
          font-family: sans-serif;
          color: #494947;
        "
      >
        <!-- Header -->
        <!-- Body -->
        <tr>
          <td style="position: absolute; z-index: 2;"><img style="width: 316px; z-index: 2; left: 50%; transform: translate(50%, 0);" src=""/></td>
        </tr>
        <tr
          style="
            display: block;
            padding-top: 165.8px;
            width="600px
          "
        >
          <td align="center" style="border-spacing: 0px" width="600px">
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="main-content"
              style="
                width: 95%;
                border: 2px solid black;
                border-radius: 20px;
                padding: 10px;
                margin-bottom: 50px;

                position: relative;
              "
            >
              <tr>
                <td colspan="2">
                  <table
                    class="main-title-block"
                    align="center"
                    style="position: relative; padding: 30px"
                  >
                    <tr>
                      <th
                        style="color: #00a4e6; padding-top: 50px; font-size: 28px"
                      >
                          ПОЛУЧЕН ОТКЛИК!
                      </th>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-size: 18px;
                          padding: 5px;
                          line-height: 18px;
                          text-align: center;
                        "
                      >
                        <div
                          class="arrow"
                          style="position: absolute; bottom: -10px; right: 200px"
                        >
                          <img
                            src=""
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            alt=""
                            width="30"
                            style="display: block"
                          />
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr align="center" >
                <td colspan="2">
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    <tr>
                      <td style="padding-left: 10px">
                        <div>
                          <span
                            style="
                              font-size: 23px;
                              color: #00a4e6;
                              line-height: 30px;
                              font-weight: 700;
                            "
                            class="name"
                          >
                            ТЕМА ОБРАЩЕНИЯ:</span
                          >
                          <br />
                          <a
                            class="phone-number"
                            href=""
                            style="
                              text-decoration: none;
                              color: #494947;
                              font-size: 12px;
                            "
                            ></a
                          >
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                  <td>
                      <table align="center">
                      <p style="font-size: 14px; padding: 15px; text-align: center; color: #494947;">${form.treatment}</p>
                      </table>
                  </td>
              </tr>
              <tr>
                <td>
                  <table align="center" style="padding: 20px; padding-bottom: 0px; font-weight: 300">
                    <tr align="center">
                      <td
                        colspan="3"
                        align="center"
                        style="font-weight: 300; font-size: 23px; padding: 10px; color: #00a4e6; font-weight: 700;"
                      >
                        Данные отправителя:
                      </td>
                    </tr>
                    <tr align="center" >
                      <td style="padding-left: 30px;">
                        <a
                  
                          onmouseover="this.style.color='#00a4e6'; this.style.background='#ffffff'; this.style.style.borderRadius='4px';"
                          onmouseout="this.style.color='#494947'; this.style.background='#ffffff'; this.style.border='0px solid #ffffff'"
                          style="
                            font-size: 12px;
                            padding: 5px;
                            color: #494947;
                            text-decoration: none;
                            border-radius: 10px;
                            
                          "
                          >
                              <div>
                                  ИМЯ:
                              </div>
                              <div style="padding: 7px; font-size: 12px;">
                                ${form.firstName}
                              </div>
                          </a
                        >
                      </td>
                      <td style="padding-left: 30px;">
                        <a
                          onmouseover="this.style.color='#00a4e6'; this.style.background='#ffffff'; this.style.style.borderRadius='4px';"
                          onmouseout="this.style.color='#494947'; this.style.background='#ffffff'; this.style.border='0px solid #ffffff'"
                          style="
                            font-size: 12px;
                            padding: 5px;
                            color: #494947;
                            text-decoration: none;
                            border-radius: 10px;
                            
                          "
                          >
                              <div>
                                  ФАМИЛИЯ:
                              </div>
                              <div style="padding: 7px; font-size: 12px;">
                              ${form.lastName}
                              </div>
                          </a
                        >
                      </td>
                      <td style="padding-left: 30px;">
                        <a
                          onmouseover="this.style.color='#00a4e6'; this.style.background='#ffffff'; this.style.style.borderRadius='4px';"
                          onmouseout="this.style.color='#494947'; this.style.background='#ffffff'; this.style.border='0px solid #ffffff'"
                          style="
                            font-size: 12px;
                            padding: 5px;
                            color: #494947;
                            text-decoration: none;
                            border-radius: 10px;
                            
                          "
                          >
                              <div>
                                  КОНТАКТНЫЙ НОМЕР:
                              </div>
                              <div style="padding: 7px; font-size: 12px;">
                                  ${form.phone}
                              </div>
                          </a
                        >
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table align="center" style="padding: 20px; padding-bottom: 0px; font-weight: 300">
                    <tr align="center" >
                      <td style="padding-left: 30px;">
                        <a
                          onmouseover="this.style.color='#00a4e6'; this.style.background='#ffffff'; this.style.style.borderRadius='4px';"
                          onmouseout="this.style.color='#494947'; this.style.background='#ffffff'; this.style.border='0px solid #ffffff'"
                          style="
                            font-size: 12px;
                            padding: 5px;
                            color: #494947;
                            text-decoration: none;
                            border-radius: 10px;
                            
                          "
                          >
                              <div>
                                  E-MAIL:
                              </div>
                              <div style="padding: 7px; font-size: 12px;">
                                  ${form.email}
                              </div>
                          </a
                        >
                      </td>
                      <td style="padding-left: 30px;">
                        <a
                          onmouseover="this.style.color='#00a4e6'; this.style.background='#ffffff'; this.style.style.borderRadius='4px';"
                          onmouseout="this.style.color='#494947'; this.style.background='#ffffff'; this.style.border='0px solid #ffffff'"
                          style="
                            font-size: 12px;
                            padding: 5px;
                            color: #494947;
                            text-decoration: none;
                            border-radius: 10px;
                            
                          "
                          >
                              <div>
                                  СТРАНА:
                              </div>
                              <div style="padding: 7px; font-size: 12px;">
                                  ${form.country}
                              </div>
                          </a
                        >
                      </td>
                      <td style="padding-left: 30px;">
                        <a
                          onmouseover="this.style.color='#00a4e6'; this.style.background='#ffffff'; this.style.style.borderRadius='4px';"
                          onmouseout="this.style.color='#494947'; this.style.background='#ffffff'; this.style.border='0px solid #ffffff'"
                          style="
                            font-size: 12px;
                            padding: 5px;
                            color: #494947;
                            text-decoration: none;
                            border-radius: 10px;
                            
                          "
                          >
                              <div>
                                  ГОРОД:
                              </div>
                              <div style="padding: 7px; font-size: 12px;">
                                  ${form.city}
                              </div>
                          </a
                        >
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table align="center" style="padding: 20px; padding-bottom: 0px; font-weight: 300">
                    <tr align="center" >
                    
                      <td style="padding-left: 10px; padding-right: 10px;">
                        <a
                          onmouseover="this.style.color='#00a4e6'; this.style.background='#ffffff'; this.style.style.borderRadius='4px';"
                          onmouseout="this.style.color='#494947'; this.style.background='#ffffff'; this.style.border='0px solid #ffffff'"
                          style="
                            font-size: 12px;
                            padding: 5px;
                            color: #494947;
                            text-decoration: none;
                            border-radius: 10px;
                            
                          "
                          >
                              <div>
                                  КОМПАНИЯ:
                              </div>
                              <div style="padding: 7px; font-size: 12px;">
                                  ${form.company}
                              </div>
                          </a
                        >
                      </td>
                      <td style="padding-left: 30px;">
                          <a
                            onmouseover="this.style.color='#00a4e6'; this.style.background='#ffffff'; this.style.style.borderRadius='4px';"
                            onmouseout="this.style.color='#494947'; this.style.background='#ffffff'; this.style.border='0px solid #ffffff'"
                            style="
                              font-size: 12px;
                              padding: 5px;
                              color: #494947;
                              text-decoration: none;
                              border-radius: 10px;
                              
                            "
                            >
                                <div>
                                  ДОЛЖНОСТЬ:
                                </div>
                                <div style="padding: 7px; font-size: 12px;">
                                  ${form.jobPosition}
                                </div>
                            </a
                          >
                        </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table align="center" style="border: 2px solid;
                  border-radius: 10px; padding-bottom: 0px; font-weight: 300">
                      <tr align="center" >
                      
                        <td style="padding-left: 30px;" colspan="3">
                          <a
                            onmouseover="this.style.color='#00a4e6'; this.style.background='#ffffff'; this.style.style.borderRadius='4px';"
                            onmouseout="this.style.color='#494947'; this.style.background='#ffffff'; this.style.border='0px solid #ffffff'"
                            style="
                              font-size: 12px;
                              padding: 5px;
                              color: #494947;
                              text-decoration: none;
                              border-radius: 10px;
                              
                            "
                            >
                                <div>
                                    ТЕКСТ ОБРАЩЕНИЯ:
                                </div>
                                <div style="padding: 7px; font-size: 12px;">
                                  ${form.question}
                                </div>
                            </a
                          >
                        </td>
                      </tr>
                    </table>
                </td>
              </tr>
              <tr align="center">
            </table>
          </td>
        </tr>
      </table>
  </boby>
  </html>`;
  return htmlTemplate;
}

export default getTepmlate;
