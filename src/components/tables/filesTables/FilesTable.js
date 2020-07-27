import React from "react";

export const FilesTable = () => {
  return (
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Bordered Table</h4>
          <h6 class="card-subtitle">
            Add<code>.table-bordered</code>for borders on all sides of the table
            and cells.
          </h6>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Progress</th>
                  <th>Deadline</th>
                  <th class="text-nowrap">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lunar probe project</td>
                  <td>
                    <div class="progress progress-xs margin-vertical-10 ">
                      <div
                        class="progress-bar bg-danger"
                        style={{ width: "35%", height: "6px" }}
                      ></div>
                    </div>
                  </td>
                  <td>May 15, 2015</td>
                  <td class="text-nowrap">
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-original-title="Edit"
                    >
                      {" "}
                      <i class="fa fa-pencil text-inverse m-r-10"></i>{" "}
                    </a>
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-original-title="Close"
                    >
                      {" "}
                      <i class="fa fa-close text-danger"></i>{" "}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Dream successful plan</td>
                  <td>
                    <div class="progress progress-xs margin-vertical-10 ">
                      <div
                        class="progress-bar bg-warning"
                        // style="width: 50%; height:6px;"
                      ></div>
                    </div>
                  </td>
                  <td>July 1, 2015</td>
                  <td class="text-nowrap">
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-original-title="Edit"
                    >
                      {" "}
                      <i class="fa fa-pencil text-inverse m-r-10"></i>{" "}
                    </a>
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-original-title="Close"
                    >
                      {" "}
                      <i class="fa fa-close text-danger"></i>{" "}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Office automatization</td>
                  <td>
                    <div class="progress progress-xs margin-vertical-10 ">
                      <div
                        class="progress-bar bg-success"
                        // style="width: 100%; height:6px;"
                      ></div>
                    </div>
                  </td>
                  <td>Apr 12, 2015</td>
                  <td class="text-nowrap">
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-original-title="Edit"
                    >
                      {" "}
                      <i class="fa fa-pencil text-inverse m-r-10"></i>{" "}
                    </a>
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-original-title="Close"
                    >
                      {" "}
                      <i class="fa fa-close text-danger"></i>{" "}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>The sun climbing plan</td>
                  <td>
                    <div class="progress progress-xs margin-vertical-10 ">
                      <div
                        class="progress-bar bg-primary"
                        // style="width: 70%; height:6px;"
                      ></div>
                    </div>
                  </td>
                  <td>Aug 9, 2015</td>
                  <td class="text-nowrap">
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-original-title="Edit"
                    >
                      {" "}
                      <i class="fa fa-pencil text-inverse m-r-10"></i>{" "}
                    </a>
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-original-title="Close"
                    >
                      {" "}
                      <i class="fa fa-close text-danger"></i>{" "}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Open strategy</td>
                  <td>
                    <div class="progress progress-xs margin-vertical-10 ">
                      <div
                        class="progress-bar bg-info"
                        // style="width: 85%; height:6px;"
                      ></div>
                    </div>
                  </td>
                  <td>Apr 2, 2015</td>
                  <td class="text-nowrap">
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-original-title="Edit"
                    >
                      {" "}
                      <i class="fa fa-pencil text-inverse m-r-10"></i>{" "}
                    </a>
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-original-title="Close"
                    >
                      {" "}
                      <i class="fa fa-close text-danger"></i>{" "}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Tantas earum numeris</td>
                  <td>
                    <div class="progress progress-xs margin-vertical-10 ">
                      <div
                        class="progress-bar bg-inverse"
                        // style="width: 50%; height:6px;"
                      ></div>
                    </div>
                  </td>
                  <td>July 11, 2015</td>
                  <td class="text-nowrap">
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-original-title="Edit"
                    >
                      {" "}
                      <i class="fa fa-pencil text-inverse m-r-10"></i>{" "}
                    </a>
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-original-title="Close"
                    >
                      {" "}
                      <i class="fa fa-close text-danger"></i>{" "}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
