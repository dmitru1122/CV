import { Iform, IformDefault } from '../../../interfaces/allInterfaces';

function getTepmlate(props) {
  const { form } = props;
  const htmlTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:v="urn:schemas-microsoft-com:vml"
  >
    <head>
      <!--[if gte mso 9
        ]><xml
          ><o:OfficeDocumentSettings><o:AllowPNG /><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml
        ><!
      [endif]-->
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <meta content="width=device-width" name="viewport" />
      <!--[if !mso]><!-->
      <meta content="IE=edge" http-equiv="X-UA-Compatible" />
      <!--<![endif]-->
      <title></title>
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
      <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css" />
      <!--<![endif]-->
      <style type="text/css">
        body {
          margin: 0;
          padding: 0;
        }
  
        table,
        td,
        tr {
          vertical-align: top;
          border-collapse: collapse;
        }
  
        * {
          line-height: inherit;
        }
  
        a[x-apple-data-detectors='true'] {
          color: inherit !important;
          text-decoration: none !important;
        }
      </style>
      <style id="media-query" type="text/css">
        @media (max-width: 660px) {
          .block-grid,
          .col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
          }
  
          .block-grid {
            width: 100% !important;
          }
  
          .col {
            width: 100% !important;
          }
  
          .col_cont {
            margin: 0 auto;
          }
  
          img.fullwidth,
          img.fullwidthOnMobile {
            width: 100% !important;
          }
  
          .no-stack .col {
            min-width: 0 !important;
            display: table-cell !important;
          }
  
          .no-stack.two-up .col {
            width: 50% !important;
          }
  
          .no-stack .col.num2 {
            width: 16.6% !important;
          }
  
          .no-stack .col.num3 {
            width: 25% !important;
          }
  
          .no-stack .col.num4 {
            width: 33% !important;
          }
  
          .no-stack .col.num5 {
            width: 41.6% !important;
          }
  
          .no-stack .col.num6 {
            width: 50% !important;
          }
  
          .no-stack .col.num7 {
            width: 58.3% !important;
          }
  
          .no-stack .col.num8 {
            width: 66.6% !important;
          }
  
          .no-stack .col.num9 {
            width: 75% !important;
          }
  
          .no-stack .col.num10 {
            width: 83.3% !important;
          }
  
          .video-block {
            max-width: none !important;
          }
  
          .mobile_hide {
            min-height: 0px;
            max-height: 0px;
            max-width: 0px;
            display: none;
            overflow: hidden;
            font-size: 0px;
          }
  
          .desktop_hide {
            display: block !important;
            max-height: none !important;
          }
        }
      </style>
      <style id="icon-media-query" type="text/css">
        @media (max-width: 660px) {
          .icons-inner {
            text-align: center;
          }
  
          .icons-inner td {
            margin: 0 auto;
          }
        }
      </style>
    </head>
    <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #e2e2e2">
      <!--[if IE]><div class="ie-browser"><![endif]-->
      <table
        bgcolor="#e2e2e2"
        cellpadding="0"
        cellspacing="0"
        class="nl-container"
        role="presentation"
        style="
          table-layout: fixed;
          vertical-align: top;
          min-width: 320px;
          border-spacing: 0;
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          background-color: #e2e2e2;
          width: 100%;
        "
        valign="top"
        width="100%"
      >
        <tbody>
          <tr style="vertical-align: top" valign="top">
            <td style="word-break: normal; vertical-align: top" valign="top">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#ffffff"><![endif]-->
              <div style="background-color: #e2e2e2;">
                <div
                  class="block-grid two-up"
                  style="
                    min-width: 320px;
                    max-width: 640px;
                    margin-top: 30px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: normal;
                    margin: 0 auto;
                    background-color: #e2e2e2;
                  "
                >
                  <div style="border-collapse: collapse; display: table; width: 100%; background-color: #ffffff; margin-top: 30px;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="320" style="background-color:#ffffff;width:320px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:25px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num6"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 318px; width: 320px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 25px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <div></div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td><td align="center" width="320" style="background-color:#ffffff;width:320px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:25px; padding-bottom:5px;"><![endif]-->
                    <div
                      class="col num6"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 318px; width: 320px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 25px;
                            padding-bottom: 5px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <div
                            align="center"
                            class="button-container"
                            style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px"
                          >
                            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  style="height:34.5pt;width:129.75pt;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#4d61fc"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:18px"><!
                            [endif]--><a
                              
                              style="
                                -webkit-text-size-adjust: none;
                                text-decoration: none;
                                display: inline-block;
                                color: #ffd700;
                                background-color: #e2e2e2;
                                border-radius: 0px;
                                -webkit-border-radius: 0px;
                                -moz-border-radius: 0px;
                                width: auto;
                                width: auto;
                                border-top: 0px solid #8a3b8f;
                                border-right: 0px solid #8a3b8f;
                                border-bottom: 0px solid #8a3b8f;
                                border-left: 0px solid #8a3b8f;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                text-align: center;
                                mso-border-alt: none;
                                word-break: keep-all;
                              "
                              target="_blank"
                              ><span
                                style="
                                  padding-left: 20px;
                                  padding-right: 20px;
                                  font-size: 18px;
                                  display: inline-block;
                                  letter-spacing: normal;
                                "
                                ><span style="font-size: 16px; line-height: 2; word-break: normal; mso-line-height-alt: 32px"
                                  ><span
                                    data-mce-style="font-size: 18px; line-height: 36px;"
                                    style="font-size: 18px; line-height: 36px"
                                    >RESPONSE FROM CV</span
                                  ></span
                                ></span
                              ></a
                            >
                            <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                          </div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              
              <div style="background-color: #e2e2e2;">
                <div
                  class="block-grid"
                  style="
                    min-width: 320px;
                    max-width: 640px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: normal;
                    margin: 0 auto;
                    background-color: #e2e2e2;
                  "
                >
                  <div style="border-collapse: collapse; display: table; width: 100%; background-color: #ffffff">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:30px; padding-bottom:20px;"><![endif]-->
                    <div
                      class="col num12"
                      style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 30px;
                            padding-bottom: 20px;
                            padding-right: 0px;
                            padding-left: 0px;
                          "
                        >
                          <!--<![endif]-->
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tr style="vertical-align: top" valign="top">
                              <td
                                align="center"
                                style="
                                  word-break: normal;
                                  vertical-align: top;
                                  padding-bottom: 0px;
                                  padding-left: 0px;
                                  padding-right: 0px;
                                  padding-top: 0px;
                                  text-align: center;
                                  width: 100%;
                                "
                                valign="top"
                                width="100%"
                              >
                                <h1
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                    font-size: 34px;
                                    font-weight: normal;
                                    letter-spacing: normal;
                                    line-height: 120%;
                                    text-align: center;
                                    margin-top: 0;
                                    margin-bottom: 0;
                                  "
                                >
                                  RESPONSE
                                </h1>
                              </td>
                            </tr>
                          </table>
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
                          <div
                            style="
                              color: #393d47;
                              font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                              line-height: 1.5;
                              padding-top: 10px;
                              padding-right: 10px;
                              padding-bottom: 10px;
                              padding-left: 10px;
                            "
                          >
                            <div
                              class="txtTinyMce-wrapper"
                              style="
                                font-size: 14px;
                                line-height: 1.5;
                                color: #393d47;
                                font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                mso-line-height-alt: 21px;
                              "
                            >
                              <p
                                style="
                                  margin: 0;
                                  font-size: 16px;
                                  line-height: 1.5;
                                  word-break: normal;
                                  text-align: center;
                                  mso-line-height-alt: 24px;
                                  margin-top: 0;
                                  margin-bottom: 0;
                                "
                              >
                                <span style="font-size: 16px">Company <strong>${form.company}</strong> have sent the feedback.</span>
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: #e2e2e2;">
                <div
                  class="block-grid three-up"
                  style="
                    min-width: 320px;
                    max-width: 640px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: normal;
                    margin: 0 auto;
                    background-color: #f4f4f4;
                  "
                >
                  <div style="border-collapse: collapse; display: table; width: 100%; background-color: #f4f4f4">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#f4f4f4"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 15px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
                          <div
                            style="
                              color: #555555;
                              font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                              line-height: 1.2;
                              padding-top: 10px;
                              padding-right: 10px;
                              padding-bottom: 10px;
                              padding-left: 10px;
                            "
                          >
                            <div
                              class="txtTinyMce-wrapper"
                              style="
                                font-size: 14px;
                                line-height: 1.2;
                                color: #555555;
                                font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                mso-line-height-alt: 17px;
                              "
                            >
                              <p
                                style="
                                  margin: 0;
                                  font-size: 28px;
                                  line-height: 1.2;
                                  word-break: normal;
                                  mso-line-height-alt: 34px;
                                  margin-top: 0;
                                  margin-bottom: 0;
                                "
                              >
                                <span style="font-size: 28px">Name</span>
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 15px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <div></div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:25px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 25px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <div
                            align="left"
                            class="button-container"
                            style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px"
                          >
                            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px" align="left"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  style="height:40.5pt;width:94.5pt;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#4d61fc"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:22px"><!
                            [endif]--><a
                              style="
                                -webkit-text-size-adjust: none;
                                text-decoration: none;
                                display: inline-block;
                                color: #ffd700;
                                background-color: #6f6b79;
                                border-radius: 0px;
                                -webkit-border-radius: 0px;
                                -moz-border-radius: 0px;
                                width: auto;
                                width: auto;
                                border-top: 0px solid #8a3b8f;
                                border-right: 0px solid #8a3b8f;
                                border-bottom: 0px solid #8a3b8f;
                                border-left: 0px solid #8a3b8f;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                text-align: center;
                                mso-border-alt: none;
                                word-break: keep-all;
                              "
                              target="_blank"
                              ><span
                                style="
                                  padding-left: 20px;
                                  padding-right: 20px;
                                  font-size: 22px;
                                  display: inline-block;
                                  letter-spacing: undefined;
                                "
                                ><span style="font-size: 12px; line-height: 2; word-break: normal; mso-line-height-alt: 24px"
                                  ><span
                                    data-mce-style="font-size: 22px; line-height: 44px;"
                                    style="font-size: 22px; line-height: 44px"
                                    >${form.name}</span
                                  ></span
                                ></span
                              ></a
                            >
                            <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                          </div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: #e2e2e2;">
                <div
                  class="block-grid"
                  style="
                    min-width: 320px;
                    max-width: 640px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: normal;
                    margin: 0 auto;
                    background-color: #e2e2e2;
                  "
                >
                  <div style="border-collapse: collapse; display: table; width: 100%; background-color: #ffffff">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                    <div
                      class="col num12"
                      style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            padding-right: 0px;
                            padding-left: 0px;
                          "
                        >
                          <!--<![endif]-->
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="divider"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              min-width: 100%;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tbody>
                              <tr style="vertical-align: top" valign="top">
                                <td
                                  class="divider_inner"
                                  style="
                                    word-break: normal;
                                    vertical-align: top;
                                    min-width: 100%;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    padding-top: 0px;
                                    padding-right: 0px;
                                    padding-bottom: 0px;
                                    padding-left: 0px;
                                  "
                                  valign="top"
                                >
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_content"
                                    height="30"
                                    role="presentation"
                                    style="
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-top: 0px solid transparent;
                                      height: 30px;
                                      width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr style="vertical-align: top" valign="top">
                                        <td
                                          height="30"
                                          style="
                                            word-break: normal;
                                            vertical-align: top;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                          valign="top"
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: #e2e2e2;">
                <div
                  class="block-grid three-up"
                  style="
                    min-width: 320px;
                    max-width: 640px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: normal;
                    margin: 0 auto;
                    background-color: #f4f4f4;
                  "
                >
                  <div style="border-collapse: collapse; display: table; width: 100%; background-color: #f4f4f4">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#f4f4f4"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 15px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
                          <div
                            style="
                              color: #555555;
                              font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                              line-height: 1.2;
                              padding-top: 10px;
                              padding-right: 10px;
                              padding-bottom: 10px;
                              padding-left: 10px;
                            "
                          >
                            <div
                              class="txtTinyMce-wrapper"
                              style="
                                font-size: 14px;
                                line-height: 1.2;
                                color: #555555;
                                font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                mso-line-height-alt: 17px;
                              "
                            >
                              <p
                                style="
                                  margin: 0;
                                  font-size: 28px;
                                  line-height: 1.2;
                                  word-break: normal;
                                  mso-line-height-alt: 34px;
                                  margin-top: 0;
                                  margin-bottom: 0;
                                "
                              >
                                <span style="font-size: 28px">Company</span>
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 15px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <div></div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:25px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 25px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <div
                            align="left"
                            class="button-container"
                            style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px"
                          >
                            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px" align="left"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  style="height:40.5pt;width:114pt;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#4d61fc"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:22px"><!
                            [endif]--><a
                              
                              style="
                                -webkit-text-size-adjust: none;
                                text-decoration: none;
                                display: inline-block;
                                color: #ffd700;
                                background-color: #6f6b79;
                                border-radius: 0px;
                                -webkit-border-radius: 0px;
                                -moz-border-radius: 0px;
                                width: auto;
                                width: auto;
                                border-top: 0px solid #8a3b8f;
                                border-right: 0px solid #8a3b8f;
                                border-bottom: 0px solid #8a3b8f;
                                border-left: 0px solid #8a3b8f;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                text-align: center;
                                mso-border-alt: none;
                                word-break: keep-all;
                              "
                              target="_blank"
                              ><span
                                style="
                                  padding-left: 20px;
                                  padding-right: 20px;
                                  font-size: 22px;
                                  display: inline-block;
                                  letter-spacing: undefined;
                                "
                                ><span style="font-size: 12px; line-height: 2; word-break: normal; mso-line-height-alt: 24px"
                                  ><span
                                    data-mce-style="font-size: 22px; line-height: 44px;"
                                    style="font-size: 22px; line-height: 44px"
                                    >${form.company}</span
                                  ></span
                                ></span
                              ></a
                            >
                            <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                          </div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: #e2e2e2;">
                <div
                  class="block-grid"
                  style="
                    min-width: 320px;
                    max-width: 640px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: normal;
                    margin: 0 auto;
                    background-color: #e2e2e2;
                  "
                >
                  <div style="border-collapse: collapse; display: table; width: 100%; background-color: #ffffff">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                    <div
                      class="col num12"
                      style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            padding-right: 0px;
                            padding-left: 0px;
                          "
                        >
                          <!--<![endif]-->
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="divider"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              min-width: 100%;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tbody>
                              <tr style="vertical-align: top" valign="top">
                                <td
                                  class="divider_inner"
                                  style="
                                    word-break: normal;
                                    vertical-align: top;
                                    min-width: 100%;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    padding-top: 0px;
                                    padding-right: 0px;
                                    padding-bottom: 0px;
                                    padding-left: 0px;
                                  "
                                  valign="top"
                                >
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_content"
                                    height="30"
                                    role="presentation"
                                    style="
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-top: 0px solid transparent;
                                      height: 30px;
                                      width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr style="vertical-align: top" valign="top">
                                        <td
                                          height="30"
                                          style="
                                            word-break: normal;
                                            vertical-align: top;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                          valign="top"
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: #e2e2e2;">
                <div
                  class="block-grid three-up"
                  style="
                    min-width: 320px;
                    max-width: 640px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: normal;
                    margin: 0 auto;
                    background-color: #f4f4f4;
                  "
                >
                  <div style="border-collapse: collapse; display: table; width: 100%; background-color: #f4f4f4">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#f4f4f4"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 15px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
                          <div
                            style="
                              color: #555555;
                              font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                              line-height: 1.2;
                              padding-top: 10px;
                              padding-right: 10px;
                              padding-bottom: 10px;
                              padding-left: 10px;
                            "
                          >
                            <div
                              class="txtTinyMce-wrapper"
                              style="
                                font-size: 14px;
                                line-height: 1.2;
                                color: #555555;
                                font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                mso-line-height-alt: 17px;
                              "
                            >
                              <p
                                style="
                                  margin: 0;
                                  font-size: 28px;
                                  line-height: 1.2;
                                  word-break: normal;
                                  mso-line-height-alt: 34px;
                                  margin-top: 0;
                                  margin-bottom: 0;
                                "
                              >
                                <span style="font-size: 28px">E-mail</span>
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 15px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <div></div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:25px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 25px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <div
                            align="left"
                            class="button-container"
                            style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px"
                          >
                            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px" align="left"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  style="height:40.5pt;width:98.25pt;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#4d61fc"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:22px"><!
                            [endif]--><a
                              
                              style="
                                -webkit-text-size-adjust: none;
                                text-decoration: none;
                                display: inline-block;
                                color: #ffd700;
                                background-color: #6f6b79;
                                border-radius: 0px;
                                -webkit-border-radius: 0px;
                                -moz-border-radius: 0px;
                                width: auto;
                                width: auto;
                                border-top: 0px solid #8a3b8f;
                                border-right: 0px solid #8a3b8f;
                                border-bottom: 0px solid #8a3b8f;
                                border-left: 0px solid #8a3b8f;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                text-align: center;
                                mso-border-alt: none;
                                word-break: keep-all;
                              "
                              target="_blank"
                              ><span
                                style="
                                  padding-left: 20px;
                                  padding-right: 20px;
                                  font-size: 22px;
                                  display: inline-block;
                                  letter-spacing: undefined;
                                "
                                ><span style="font-size: 16px; line-height: 2; word-break: normal; mso-line-height-alt: 32px"
                                  ><span
                                    data-mce-style="font-size: 22px; line-height: 44px;"
                                    style="font-size: 22px; line-height: 44px"
                                    >${form.email}</span
                                  ></span
                                ></span
                              ></a
                            >
                            <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                          </div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: #e2e2e2;">
                <div
                  class="block-grid"
                  style="
                    min-width: 320px;
                    max-width: 640px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: normal;
                    margin: 0 auto;
                    background-color: #e2e2e2;
                  "
                >
                  <div style="border-collapse: collapse; display: table; width: 100%; background-color: #ffffff">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                    <div
                      class="col num12"
                      style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            padding-right: 0px;
                            padding-left: 0px;
                          "
                        >
                          <!--<![endif]-->
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="divider"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              min-width: 100%;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tbody>
                              <tr style="vertical-align: top" valign="top">
                                <td
                                  class="divider_inner"
                                  style="
                                    word-break: normal;
                                    vertical-align: top;
                                    min-width: 100%;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    padding-top: 0px;
                                    padding-right: 0px;
                                    padding-bottom: 0px;
                                    padding-left: 0px;
                                  "
                                  valign="top"
                                >
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_content"
                                    height="30"
                                    role="presentation"
                                    style="
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-top: 0px solid transparent;
                                      height: 30px;
                                      width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr style="vertical-align: top" valign="top">
                                        <td
                                          height="30"
                                          style="
                                            word-break: normal;
                                            vertical-align: top;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                          valign="top"
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: #e2e2e2;">
                <div
                  class="block-grid three-up"
                  style="
                    min-width: 320px;
                    max-width: 640px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: normal;
                    margin: 0 auto;
                    background-color: #f4f4f4;
                  "
                >
                  <div style="border-collapse: collapse; display: table; width: 100%; background-color: #f4f4f4">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#f4f4f4"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 15px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
                          <div
                            style="
                              color: #555555;
                              font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                              line-height: 1.2;
                              padding-top: 10px;
                              padding-right: 10px;
                              padding-bottom: 10px;
                              padding-left: 10px;
                            "
                          >
                            <div
                              class="txtTinyMce-wrapper"
                              style="
                                font-size: 12px;
                                line-height: 1.2;
                                color: #555555;
                                font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                mso-line-height-alt: 14px;
                              "
                            >
                              <p
                                style="
                                  margin: 0;
                                  font-size: 28px;
                                  line-height: 1.2;
                                  word-break: normal;
                                  mso-line-height-alt: 34px;
                                  margin-top: 0;
                                  margin-bottom: 0;
                                "
                              >
                                <span style="font-size: 28px">Phone</span>
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 15px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <div></div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:25px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 25px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <div
                            align="left"
                            class="button-container"
                            style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px"
                          >
                            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px" align="left"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  style="height:40.5pt;width:96.75pt;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#4d61fc"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:22px"><!
                            [endif]--><a
                              
                              style="
                                -webkit-text-size-adjust: none;
                                text-decoration: none;
                                display: inline-block;
                                color: #ffd700;
                                background-color: #6f6b79;
                                border-radius: 0px;
                                -webkit-border-radius: 0px;
                                -moz-border-radius: 0px;
                                width: auto;
                                width: auto;
                                border-top: 0px solid #8a3b8f;
                                border-right: 0px solid #8a3b8f;
                                border-bottom: 0px solid #8a3b8f;
                                border-left: 0px solid #8a3b8f;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                text-align: center;
                                mso-border-alt: none;
                                word-break: keep-all;
                              "
                              target="_blank"
                              ><span
                                style="
                                  padding-left: 20px;
                                  padding-right: 20px;
                                  font-size: 22px;
                                  display: inline-block;
                                  letter-spacing: undefined;
                                "
                                ><span style="font-size: 16px; line-height: 2; word-break: normal; mso-line-height-alt: 32px"
                                  ><span
                                    data-mce-style="font-size: 22px; line-height: 44px;"
                                    style="font-size: 22px; line-height: 44px"
                                    >${form.phone}</span
                                  ></span
                                ></span
                              ></a
                            >
                            <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                          </div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: #e2e2e2;">
                <div
                  class="block-grid"
                  style="
                    min-width: 320px;
                    max-width: 640px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: normal;
                    margin: 0 auto;
                    background-color: #e2e2e2;
                  "
                >
                  <div style="border-collapse: collapse; display: table; width: 100%; background-color: #ffffff">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                    <div
                      class="col num12"
                      style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            padding-right: 0px;
                            padding-left: 0px;
                          "
                        >
                          <!--<![endif]-->
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="divider"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              min-width: 100%;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tbody>
                              <tr style="vertical-align: top" valign="top">
                                <td
                                  class="divider_inner"
                                  style="
                                    word-break: normal;
                                    vertical-align: top;
                                    min-width: 100%;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    padding-top: 0px;
                                    padding-right: 0px;
                                    padding-bottom: 0px;
                                    padding-left: 0px;
                                  "
                                  valign="top"
                                >
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_content"
                                    height="30"
                                    role="presentation"
                                    style="
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-top: 0px solid transparent;
                                      height: 30px;
                                      width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr style="vertical-align: top" valign="top">
                                        <td
                                          height="30"
                                          style="
                                            word-break: normal;
                                            vertical-align: top;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                          valign="top"
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: #e2e2e2;">
                <div
                  class="block-grid three-up"
                  style="
                    min-width: 320px;
                    max-width: 640px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: normal;
                    margin: 0 auto;
                    background-color: #f4f4f4;
                  "
                >
                  <div style="border-collapse: collapse; display: table; width: 100%; background-color: #f4f4f4">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#f4f4f4"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 15px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
                          <div
                            style="
                              color: #555555;
                              font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                              line-height: 1.2;
                              padding-top: 10px;
                              padding-right: 10px;
                              padding-bottom: 10px;
                              padding-left: 10px;
                            "
                          >
                            <div
                              class="txtTinyMce-wrapper"
                              style="
                                font-size: 14px;
                                line-height: 1.2;
                                color: #555555;
                                font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                mso-line-height-alt: 17px;
                              "
                            >
                              <p
                                style="
                                  margin: 0;
                                  font-size: 28px;
                                  line-height: 1.2;
                                  word-break: normal;
                                  mso-line-height-alt: 34px;
                                  margin-top: 0;
                                  margin-bottom: 0;
                                "
                              >
                                <span style="font-size: 28px">County</span>
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 15px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <div></div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:25px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 25px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <div
                            align="left"
                            class="button-container"
                            style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px"
                          >
                            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px" align="left"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  style="height:40.5pt;width:102pt;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#4d61fc"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:22px"><!
                            [endif]--><a
                              
                              style="
                                -webkit-text-size-adjust: none;
                                text-decoration: none;
                                display: inline-block;
                                color: #ffd700;
                                background-color: #6f6b79;
                                border-radius: 0px;
                                -webkit-border-radius: 0px;
                                -moz-border-radius: 0px;
                                width: auto;
                                width: auto;
                                border-top: 0px solid #8a3b8f;
                                border-right: 0px solid #8a3b8f;
                                border-bottom: 0px solid #8a3b8f;
                                border-left: 0px solid #8a3b8f;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                text-align: center;
                                mso-border-alt: none;
                                word-break: keep-all;
                              "
                              target="_blank"
                              ><span
                                style="
                                  padding-left: 20px;
                                  padding-right: 20px;
                                  font-size: 22px;
                                  display: inline-block;
                                  letter-spacing: undefined;
                                "
                                ><span style="font-size: 16px; line-height: 2; word-break: normal; mso-line-height-alt: 32px"
                                  ><span
                                    data-mce-style="font-size: 22px; line-height: 44px;"
                                    style="font-size: 22px; line-height: 44px"
                                    >${form.country}</span
                                  ></span
                                ></span
                              ></a
                            >
                            <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                          </div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: #e2e2e2;">
                <div
                  class="block-grid"
                  style="
                    min-width: 320px;
                    max-width: 640px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: normal;
                    margin: 0 auto;
                    background-color: #e2e2e2;
                  "
                >
                  <div style="border-collapse: collapse; display: table; width: 100%; background-color: #ffffff">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                    <div
                      class="col num12"
                      style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            padding-right: 0px;
                            padding-left: 0px;
                          "
                        >
                          <!--<![endif]-->
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="divider"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              min-width: 100%;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tbody>
                              <tr style="vertical-align: top" valign="top">
                                <td
                                  class="divider_inner"
                                  style="
                                    word-break: normal;
                                    vertical-align: top;
                                    min-width: 100%;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    padding-top: 0px;
                                    padding-right: 0px;
                                    padding-bottom: 0px;
                                    padding-left: 0px;
                                  "
                                  valign="top"
                                >
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_content"
                                    height="30"
                                    role="presentation"
                                    style="
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-top: 0px solid transparent;
                                      height: 30px;
                                      width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr style="vertical-align: top" valign="top">
                                        <td
                                          height="30"
                                          style="
                                            word-break: normal;
                                            vertical-align: top;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                          valign="top"
                                        >
                                          <span></span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: #e2e2e2;">
                <div
                  class="block-grid three-up"
                  style="
                    min-width: 320px;
                    max-width: 640px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: normal;
                    margin: 0 auto;
                    background-color: #f4f4f4;
                  "
                >
                  <div style="border-collapse: collapse; display: table; width: 100%; background-color: #f4f4f4">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#f4f4f4"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 15px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
                          <div
                            style="
                              color: #555555;
                              font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                              line-height: 1.2;
                              padding-top: 10px;
                              padding-right: 10px;
                              padding-bottom: 10px;
                              padding-left: 10px;
                            "
                          >
                            <div
                              class="txtTinyMce-wrapper"
                              style="
                                font-size: 14px;
                                line-height: 1.2;
                                color: #555555;
                                font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                mso-line-height-alt: 17px;
                              "
                            >
                              <p
                                style="
                                  margin: 0;
                                  font-size: 28px;
                                  line-height: 1.2;
                                  word-break: normal;
                                  mso-line-height-alt: 34px;
                                  margin-top: 0;
                                  margin-bottom: 0;
                                "
                              >
                                <span style="font-size: 28px">City</span>
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 15px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <div></div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:#f4f4f4;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:25px; padding-bottom:15px;"><![endif]-->
                    <div
                      class="col num4"
                      style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 212px; width: 213px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 25px;
                            padding-bottom: 15px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <div
                            align="left"
                            class="button-container"
                            style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px"
                          >
                            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px" align="left"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  style="height:40.5pt;width:108pt;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#4d61fc"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:22px"><!
                            [endif]--><a
                              
                              style="
                                -webkit-text-size-adjust: none;
                                text-decoration: none;
                                display: inline-block;
                                color: #ffd700;
                                background-color: #6f6b79;
                                border-radius: 0px;
                                -webkit-border-radius: 0px;
                                -moz-border-radius: 0px;
                                width: auto;
                                width: auto;
                                border-top: 0px solid #8a3b8f;
                                border-right: 0px solid #8a3b8f;
                                border-bottom: 0px solid #8a3b8f;
                                border-left: 0px solid #8a3b8f;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                text-align: center;
                                mso-border-alt: none;
                                word-break: keep-all;
                              "
                              target="_blank"
                              ><span
                                style="
                                  padding-left: 20px;
                                  padding-right: 20px;
                                  font-size: 22px;
                                  display: inline-block;
                                  letter-spacing: undefined;
                                "
                                ><span style="font-size: 16px; line-height: 2; word-break: normal; mso-line-height-alt: 32px"
                                  ><span
                                    data-mce-style="font-size: 22px; line-height: 44px;"
                                    style="font-size: 22px; line-height: 44px"
                                    >${form.city}</span
                                  ></span
                                ></span
                              ></a
                            >
                            <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                          </div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: #e2e2e2;">
                <div
                  class="block-grid"
                  style="
                    min-width: 320px;
                    max-width: 640px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: normal;
                    margin: 0 auto;
                    background-color: #e2e2e2;
                  "
                >
                  <div style="border-collapse: collapse; display: table; width: 100%; background-color: #ffffff">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                    <div
                      class="col num12"
                      style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            padding-right: 0px;
                            padding-left: 0px;
                          "
                        >
                          <!--<![endif]-->
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
                          <div
                            style="
                              color: #555555;
                              font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                              line-height: 1.2;
                              padding-top: 10px;
                              padding-right: 10px;
                              padding-bottom: 10px;
                              padding-left: 10px;
                            "
                          >
                            <div
                              class="txtTinyMce-wrapper"
                              style="
                                font-size: 14px;
                                line-height: 1.2;
                                color: #555555;
                                font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                mso-line-height-alt: 17px;
                              "
                            >
                              <p
                                style="
                                  margin: 0;
                                  font-size: 22px;
                                  line-height: 1.2;
                                  word-break: normal;
                                  text-align: center;
                                  mso-line-height-alt: 26px;
                                  margin-top: 0;
                                  margin-bottom: 0;
                                "
                              >
                                <span style="font-size: 22px">${form.additionalInfo}</span>
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: #e2e2e2;">
                <div
                  class="block-grid"
                  style="
                    min-width: 320px;
                    max-width: 640px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: normal;
                    margin: 0 auto;
                    background-color: #e2e2e2;
                  "
                >
                  <div style="border-collapse: collapse; display: table; width: 100%; background-color: #ffffff">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                    <div
                      class="col num12"
                      style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            padding-right: 0px;
                            padding-left: 0px;
                          "
                        >
                          <!--<![endif]-->
                          <div
                            align="center"
                            class="button-container"
                            style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px"
                          >
                            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:31.5pt;width:75.75pt;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#3AAEE0"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Tahoma, Verdana, sans-serif; font-size:16px"><![endif]-->
                            <a href="http://vabprod.beget.tech/"
                                target="_blank"
                              style="
                                text-decoration: none;
                                display: inline-block;
                                color: #ffffff;
                                background-color: #3aaee0;
                                border-radius: 4px;
                                -webkit-border-radius: 4px;
                                -moz-border-radius: 4px;
                                width: auto;
                                width: auto;
                                border-top: 1px solid #3aaee0;
                                border-right: 1px solid #3aaee0;
                                border-bottom: 1px solid #3aaee0;
                                border-left: 1px solid #3aaee0;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                text-align: center;
                                mso-border-alt: none;
                                word-break: keep-all;
                              "
                            >
                              <span
                                style="
                                  padding-left: 20px;
                                  padding-right: 20px;
                                  font-size: 16px;
                                  display: inline-block;
                                  letter-spacing: undefined;
                                "
                                ><span style="font-size: 16px; line-height: 2; word-break: normal; mso-line-height-alt: 32px"
                                  >Open CV</span
                                ></span
                              >
                            </a>
                            <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                          </div>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: #e2e2e2;">
                <div
                  class="block-grid"
                  style="
                    min-width: 320px;
                    max-width: 640px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: normal;
                    margin: 0 auto;
                    background-color: #e2e2e2;
                  "
                >
                  <div style="border-collapse: collapse; display: table; width: 100%; background-color: #ffffff">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:40px; padding-bottom:40px;"><![endif]-->
                    <div
                      class="col num12"
                      style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 40px;
                            padding-bottom: 40px;
                            padding-right: 20px;
                            padding-left: 20px;
                          "
                        >
                          <!--<![endif]-->
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 15px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
                          <div
                            style="
                              color: #393d47;
                              font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                              line-height: 1.2;
                              padding-top: 15px;
                              padding-right: 0px;
                              padding-bottom: 10px;
                              padding-left: 0px;
                            "
                          >
                            <div
                              class="txtTinyMce-wrapper"
                              style="
                                line-height: 1.2;
                                font-size: 12px;
                                font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                color: #393d47;
                                mso-line-height-alt: 14px;
                              "
                            >
                              <p
                                style="
                                  margin: 0;
                                  font-size: 16px;
                                  line-height: 1.2;
                                  word-break: normal;
                                  text-align: center;
                                  mso-line-height-alt: 19px;
                                  margin-top: 0;
                                  margin-bottom: 0;
                                "
                              >
                                <span style="font-size: 16px">2021 ?? All rights reserved</span>
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color: #e2e2e2;">
                <div
                  class="block-grid"
                  style="
                    min-width: 320px;
                    max-width: 640px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: normal;
                    margin: 0 auto;
                    background-color: #e2e2e2;;
                  "
                >
                  <div style="border-collapse: collapse; display: table; width: 100%; background-color: #e2e2e2;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                    <div
                      class="col num12"
                      style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px"
                    >
                      <div class="col_cont" style="width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-right: 0px solid transparent;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            padding-right: 0px;
                            padding-left: 0px;
                          "
                        >
                          <!--<![endif]-->
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tr style="vertical-align: top" valign="top">
                              <td
                                align="center"
                                style="
                                  word-break: normal;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-right: 0px;
                                  padding-bottom: 5px;
                                  padding-left: 0px;
                                  text-align: center;
                                "
                                valign="top"
                              >
                                <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                <!--[if !vml]><!-->
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="icons-inner"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    display: inline-block;
                                    margin-right: -4px;
                                    padding-left: 0px;
                                    padding-right: 0px;
                                  "
                                  valign="top"
                                >
                                  <!--<![endif]-->
                                  <tr style="vertical-align: top" valign="top">
                                    <td
                                      align="center"
                                      style="
                                        word-break: normal;
                                        vertical-align: top;
                                        text-align: center;
                                        padding-top: 5px;
                                        padding-bottom: 5px;
                                        padding-left: 5px;
                                        padding-right: 6px;
                                      "
                                      valign="top"
                                    >
                                      <a href="https://www.designedwithbee.com/"
                                        ><img
                                          align="center"
                                          alt="Designed with BEE"
                                          class="icon"
                                          height="32"
                                          src="images/bee.png"
                                          style="border: 0"
                                          width="null"
                                      /></a>
                                    </td>
                                    <td
                                      style="
                                        word-break: normal;
                                        font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                        font-size: 15px;
                                        color: #9d9d9d;
                                        vertical-align: middle;
                                        letter-spacing: undefined;
                                      "
                                      valign="middle"
                                    >
                                      <a href="https://www.designedwithbee.com/" style="color: #9d9d9d; text-decoration: none"
                                        >Designed with BEE</a
                                      >
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      <!--[if (IE)]></div><![endif]-->
    </body>
  </html>
  `;

  return htmlTemplate;
}

getTepmlate.propTypes = Iform;
getTepmlate.defaultProps = IformDefault;

export default getTepmlate;
